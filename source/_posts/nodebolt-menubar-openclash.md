---
title: NodeBolt：把路由器上的 OpenClash，搬进 Mac 菜单栏
date: 2026-06-22 10:00:00
cover: /img/cover-nodebolt.jpg
tags:
  - macOS
  - Swift
  - OpenClash
  - 自己写的小东西
categories:
  - 折腾记录
---

家里的路由器上跑着 OpenClash。这件事本身很好，唯一的问题是——我想换个节点的时候，得先去求它。

流程大概是这样：打开浏览器，输入一串内网 IP（每次都要想一下是 6.1 还是 1.1），登录，在后台菜单里找到 OpenClash，点进面板，等它加载，终于看见节点列表，点一下。

全程四十秒，其中三十五秒在等待和回忆。

于是我写了 **NodeBolt**——一个常驻 Mac 菜单栏的小开关。点一下 ⚡，节点列表就在那儿了。

<!-- more -->

## 它是什么

一句话：**菜单栏里的 OpenClash 遥控器**。

<img src="/img/nodebolt/panel.jpg" alt="NodeBolt 主面板" width="340">

它不是代理软件，不接管你的网络，也不在你的 Mac 上跑内核。你的路由器该怎么跑还怎么跑——NodeBolt 只是坐在菜单栏里，替你按按钮。

沟通方式是 Mihomo 自带的 **RESTful API**。你给它一个地址和一把钥匙，它就只用这两样东西干活：**不碰 SSH，不改你的路由器配置，不往里塞任何东西**。像个有分寸的客人，进门只坐在你指的那把椅子上。

## 能干什么

### 切节点

所有节点平铺在面板里，延迟用颜色标好——绿的快，橙的一般，红的你可以当它不存在。

点一下就切，**面板不会收起来**。这个细节是我给自己加的：挑节点这种事很少一次就满意，收起来再点开，第三次你就烦了。

还有搜索、收藏置顶、按延迟或名称排序、一键把超时的都藏起来。嫌麻烦就点「⚡ 最快」，它直接带你去延迟最低的那个。规则 / 全局 / 直连三种模式也在顶上摆着，随手就能换。

### 测速

<img src="/img/nodebolt/detect.jpg" alt="节点检测" width="340">

整组一次测完，也可以单测某个。打开面板自动测、隔一段时间自动测，都行。节点一个个转圈出结果，绿橙红超时，一目了然。

### 检测：确认它是真的通了

节点显示 55ms，不代表你能打开 YouTube。这两件事之间隔着一整个世界。

所以有了这一页：一键测 GitHub / YouTube / 百度 / QQ 到底通不通、多快。

<img src="/img/nodebolt/ip.jpg" alt="代理出口 IP 检测" width="340">

还会查你的代理出口 IP——三个数据源（ip.sb / ipwho.is / ipapi.is）对比着看，顺便告诉你这个 IP 是不是机房 IP、是不是被标记成代理或风险 IP。

有时候连不上某个网站，不是节点慢，是那个 IP 早就被人用坏了。知道这一点，能省下不少无意义的重启。

### 管理

<img src="/img/nodebolt/management.jpg" alt="管理窗口" width="520">

平时用不上，但需要的时候不用再去开路由器后台：

- **订阅**：列出、更新、健康检查；配置文件按路径一键切换
- **连接**：看实时活动连接、搜索、掐掉某一个或者全部
- **实时监控**：上下行速率、内存占用、滚动日志
- **杂项**：DNS 查询、清 FakeIP、看内核版本、更新 GEO 库

重启和升级内核也做了，但放在了比较深的地方，还加了二次确认——毕竟按错了，断网的是全家。

### 一些顺手的地方

菜单栏可以直接显示当前节点名或实时网速（觉得吵就只留个图标，或者干脆藏起来）。可以设全局快捷键，一键切最快或呼出面板。

可以存多套连接档案，家里一套公司一套，切换一下就行。开机自启、节点掉线发系统通知、换了 Wi-Fi 自动重连——这些都在。

## 怎么用

### 装

1. 去 [Releases](https://github.com/zhangwenqiang0214/NodeBolt/releases) 下载 `NodeBolt.dmg`，拖进「应用程序」。
2. 第一次打开要**右键 →「打开」**。这是未签名构建，Gatekeeper 需要你亲口说一句「我知道我在干什么」，说一次就够了。
3. 提示时**允许「本地网络」**——它要靠这个才能摸到你的路由器。

### 配

点菜单栏的 ⚡ → ⚙ 设置，填两样东西：

- **API 地址**，形如 `http://192.168.x.x:9090`
- **Secret**

这两样在 OpenClash 的「外部控制」设置里。填完就完事了，没有第四步。

### 或者自己编译

```bash
git clone https://github.com/zhangwenqiang0214/NodeBolt.git
cd NodeBolt
./build.sh          # 编译并打包 dist/NodeBolt.app（Universal）
./package_dmg.sh    # 生成 dmg
```

需要 Swift 工具链，完整 Xcode 或只装 Command Line Tools 都可以。

## 要求

- **macOS 14 (Sonoma)** 或更高
- **Apple Silicon 和 Intel 都能跑**（Universal 包）
- 内核是 **Mihomo / Clash.Meta**，并且开了外部控制器。OpenClash 自带的就行，我在 v1.19.x 上实测过

## 接下来

`v0.1.0` 已经发了。手里还欠着几件事：

- 代码签名和公证，让你双击就能装，不用再右键
- Homebrew Cask，`brew install --cask nodebolt`
- Secret 存进系统钥匙串，不再明文躺在硬盘上
- 中英文双语
- 延迟历史曲线、节点分组视图

技术栈是 SwiftUI + AppKit，Swift Package Manager 管依赖，几 MB，常驻菜单栏基本不占内存。

---

代码在 **[github.com/zhangwenqiang0214/NodeBolt](https://github.com/zhangwenqiang0214/NodeBolt)**，MIT 协议。

有想法或者遇到问题，欢迎提 Issue。我大概率会看，也大概率会改。
