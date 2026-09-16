---
title: 一封删库通知背后的四年：Manus 的暴富、出走、卖身与被夺回
date: 2026-08-16 10:00:00
cover: /img/cover-manus.jpg
tags:
  - AI
  - 行业观察
  - 时间线梳理
categories:
  - 观察
---

> 起因是一封邮件。2026 年 8 月中旬，Manus 给用户群发了一封标题为 "ACTION REQUIRED: 7 days left to back up ... for future restoration" 的信，通知在 2025 年 12 月 29 日之后产生的部分数据将在 8 月 23 日 08:00（新加坡时间）起被删除，服务将于 8 月 25 日 08:00 恢复——"Manus 将很快恢复以独立公司的形式运营"。
>
> 一家公司要"恢复独立"，意味着它此前不独立；一家公司要删掉自己用户从某个特定日期起产生的所有数据，那个日期通常是某笔交易的交割日。这封邮件里的每一个措辞都是被律师改过的，而它省略掉的部分，是过去 18 个月里中美科技监管史上最离奇的一桩案子。
>
> 本文所有事实均标注来源。传闻与未经证实的部分单独列出，不与实锤混写。


<!-- more -->
---

## 一、邮件里的三个日期

先把这封邮件当成一份取证材料来读。

它给了三个时间点：**2025 年 12 月 29 日**（数据开始受影响的起点）、**2026 年 8 月 23 日 07:59 SGT**（备份截止）、**2026 年 8 月 25 日 08:00 SGT**（服务恢复）。它给的理由是"为遵守特定司法辖区的监管要求"（to comply with regulatory requirements in specific jurisdictions），并且强调 "This is unavoidable"。

2025 年 12 月 29 日，是 Meta 收购 Manus 的交割日（[CNBC，2025 年 12 月 30 日](https://www.cnbc.com/2025/12/30/meta-acquires-singapore-ai-agent-firm-manus-china-butterfly-effect-monicai.html)）。也就是说，Manus 要删的，正是"在 Meta 名下这 8 个月里"产生的全部用户数据。Manus 官方在帮助中心里明确写了这不是安全事件（"This is not a security incident"，[Manus Help Center](https://help.manus.im/en/articles/16147831-service-change-overview-what-s-happening-and-am-i-affected)），公开信见 [Manus 官方博客《A Note to Our Users》](https://manus.im/blog/a-note-to-our-users)，以及 [第一财经的中文报道](https://www.yicai.com/news/103314207.html)。

一笔已经交割、已经完成人员和系统整合的跨境并购，被要求原样退回去——退回去到什么程度？连并购期间产生的数据都要抹掉，因为这些数据在法律上"曾经属于一家美国公司"。这在全球并购史上极其罕见。

要理解这封邮件，得从四年前一个在武汉做微信插件的年轻人讲起。

---

## 二、序章：两个 1992 年出生的人

Manus 这家公司真正的名字叫**蝴蝶效应**（Butterfly Effect），产品线上还有一个更早、更赚钱的东西叫 **Monica**。

**肖弘**，1992 年生于江西吉安，2015 年毕业于华中科技大学，毕业后留在武汉创业（[新浪财经](https://finance.sina.com.cn/roll/2025-03-09/doc-inenzieq7906272.shtml)）。他的第一段创业是极其"中国式"的务实路线：做微信生态的 SaaS 工具——**壹伴助手**（公众号排版运营）和**微伴助手**（企业微信 SCRM），公司叫夜莺科技。这两个产品不性感，但现金流健康，养活了团队，也让他在 2022 年 ChatGPT 发布前两个月就掉头开始做 AI（[澎湃/知乎整理](https://zhuanlan.zhihu.com/p/31611864730)）。

**季逸超**（Peak），同样 1992 年生，北京人，北大附中、北京信息科技大学，父亲是北大物理系教授。他 16 岁写出**猛犸浏览器**，拿过 Macworld Asia 特等奖，定价 1.99 美元，三天下载 12 万次；2012 年拿到徐小平和红杉的投资创立 **Peak Labs**，是中国最早一批被媒体反复报道的"90 后天才少年"（[创业邦重发的十二年前旧文](https://www.cyzone.cn/article/792156.html)、[季逸超百度百科](https://baike.baidu.com/item/%E5%AD%A3%E9%80%B8%E8%B6%85/3787689)）。

一个是打法凶狠的产品型连续创业者，一个是被资本追了十几年的技术天才。2026 年 3 月，这两个人的名字会一起出现在一份"限制出境"的报道里——但那是后话。

---

## 三、2022–2024：靠"套壳"活成现金牛

蝴蝶效应真正的第一桶金，是 **Monica**：一个浏览器插件，把 GPT-4、Claude、后来还有 DeepSeek 等模型缝进用户的浏览器，做聊天、翻译、写文案、生成图片。

Monica 的增长方式很能说明肖弘的风格：2023 年，它**直接收购了独立开发者的产品 "ChatGPT for Google"**，用买流量的方式完成用户跃迁，海外用户规模突破 700 万（[新浪财经](https://finance.sina.com.cn/roll/2025-03-09/doc-inenzieq7906272.shtml)）。

这里出现了后来贯穿全篇的第一个关键词：**套壳**。Monica 从第一天起就被骂套壳——它不训模型，它只是把别人的模型包装成用户愿意付钱的界面。有中文媒体后来给了个精准的标题："[Manus 背后的华人团队：套壳到极致，就是胜利](https://m.thepaper.cn/newsDetail_forward_30320407)"。

两年内四轮融资，估值从 1400 万美元涨到接近 5 亿美元，早期投资方包括真格基金、红杉中国（HSG）、腾讯（[36氪](https://36kr.com/p/3200393697427076)）。2024 年 11 月的 A 轮由腾讯和红杉中国领投，真格和王慧文跟投（[新浪财经](https://finance.sina.com.cn/tech/roll/2025-03-11/doc-inephsqm2596938.shtml)）。

请记住这张股东名单：**腾讯、红杉中国（HSG）、真格**。18 个月后，正是这三家把公司从 Meta 手里买了回来。

---

## 四、2025 年 3 月 6 日：被神话的 24 小时

2025 年 3 月 5 日深夜到 6 日，蝴蝶效应发布了 Manus 的内测预览版，定位是"全球首款通用 AI Agent"。发布视频演示了它自动筛简历、做股票分析、写研究报告，**20 小时内播放量超过 100 万**（[Wikipedia: Manus (AI agent)](https://en.wikipedia.org/wiki/Manus_(AI_agent))）。

然后是那场著名的邀请码狂欢。

Manus 采用邀请码制，官方免费发放，但市场瞬间失控：闲鱼和各类电商、社交平台上，邀请码被炒到 **5 万到 10 万人民币**（约 7000–13800 美元）（[Wikipedia](https://en.wikipedia.org/wiki/Manus_(AI_agent))、[新浪科技《邀请码炒到10万！Manus真"颠覆"还是真"炒作"？》](https://finance.sina.com.cn/tech/roll/2025-03-07/doc-inenvmwk9821012.shtml)）。《华尔街日报》报道的数字更保守，称邀请码转售价超过 1000 美元。官方随后出面澄清：从未开设任何付费获取渠道，邀请码是免费的，呼吁理性参与（[AIbase](https://www.aibase.com/news/www.aibase.com/news/16018)）。

超过 **350 万人**申请了内测资格（[The AI Rankings 汇总](https://theairankings.com/butterfly-effect/)）。当时中文舆论场普遍的说法是"DeepSeek 之后的第二个国运时刻"。

冲突在第一天就埋下了。质疑者的观点非常直接：一个连自己模型都没有的产品，凭什么？而支持者的回答同样直接：用户不关心谁做的模型，用户关心谁把活干完了。

**这场狂欢里有一个几乎没人注意的细节**：Manus 从发布起主界面就是英文，且从未在中国大陆完成大模型备案。有媒体在 3 月 10 日就提出，Manus 若使用未在境内备案的境外大模型产品、自身也无备案，严格说在中国境内是不合规的（[36氪《Manus 或面临备案监管问题》](https://36kr.com/p/3200393697427076)）。一家中国团队做的产品，从诞生第一天起，法律上就不属于中国市场。这个"先天缺陷"，将在 12 个月后变成整件事的核心矛盾。

---

## 五、被"越狱"的那三天

爆红后的第四天，出事了。

2025 年 3 月 10 日，一位 X 用户 **jian** 声称只用一条简单指令，就让 Manus 输出了沙盒里 `/opt/.manus/` 目录下的文件，拿到了运行时代码、工具链和完整的提示词框架。结论是：**Manus 跑在 Claude Sonnet 上，配了 29 个工具，并没有实现所谓的多智能体架构**（[腾讯云开发者社区](https://cloud.tencent.com/developer/article/2503845)、[21世纪经济报道《Manus 底层解码："套壳"下的创新"越狱"》](https://www.21jingji.com/article/20250314/herald/8a720bebb4a366cd3c5ba1607d921b61.html)）。

这次"越狱"最有意思的不是泄露本身，而是**季逸超的回应姿态**：他公开表示用户本来就可以直接访问沙盒，每个会话都是隔离沙盒，代码只做了轻度混淆，因为它只负责接收指令（同上来源）。翻译成人话——这不是被黑，这是设计如此。

从安全从业者的角度看，这个回应其实是站得住的：单会话隔离沙盒、代码在客户可控执行环境内、无高价值秘密驻留，威胁模型本身就不假设沙盒内容保密。但在舆论场上，"被扒出跑的是 Claude" 这一条盖过了一切技术辩解。

紧接着是更狠的一击：**MetaGPT 团队的 5 个人，用 3 个小时做出了开源版 OpenManus，不需要邀请码，支持本地部署**（[澎湃新闻](https://www.thepaper.cn/newsDetail_forward_30331141)）；CAMEL-AI 团队随后放出 OWL。"三小时复刻"成了那一周中文互联网最流行的梗，也成了套壳论最有力的弹药。

Manus 的应对是三天后的一次外交式操作：**3 月 11 日，宣布与阿里通义千问团队达成战略合作**，称将基于通义千问系列开源模型，在国产模型和算力平台上实现 Manus 的全部功能（[新浪财经](https://finance.sina.com.cn/roll/2025-03-11/doc-inephsqi5393381.shtml)、[新浪科技](https://finance.sina.com.cn/tech/roll/2025-03-11/doc-inephsqm2596938.shtml)）。

这一步在当时被解读为"回应套壳质疑 + 铺路国内版"。事后看，它是 Manus 与中国产业绑定最深的一次公开动作——也是最后一次。

---

## 六、5 亿美元估值，和一封来自美国财政部的问询

2025 年 4 月，Manus 拿到 **Benchmark 领投的 7500 万美元融资，投后估值约 5 亿美元**（[TechCrunch，2025 年 4 月 25 日](https://techcrunch.com/2025/04/25/chinese-ai-startup-manus-reportedly-gets-funding-from-benchmark-at-500m-valuation/)）。Benchmark 是硅谷最老牌的 VC 之一，投过 eBay、Twitter、Uber、Snap。

三周后，麻烦来了。

2025 年 5 月 9 日，[Semafor](https://www.semafor.com/article/05/09/2025/us-treasury-examining-benchmark-capitals-ties-to-chinese-startup-manus-ai) 和 [TechCrunch](https://techcrunch.com/2025/05/09/the-us-is-reviewing-benchmarks-investment-into-chinese-ai-startup-manus/) 同时报道：**美国财政部正在审查 Benchmark 这笔投资**，依据是 2023 年行政令衍生出的"对外投资安全计划"（Outbound Investment Security Program, OISP，又称"反向 CFIUS"），该规则于 2025 年 1 月 2 日生效，限制美国资本投向"受关注国家"的 AI 等关键技术。

Benchmark 的律师给出的抗辩理由，堪称本文最大的黑色幽默：

**第一，Manus 不算 AI 公司管制对象，因为它不训练自己的模型，只是别人模型的"壳"（wrapper）；第二，Manus 不是中国公司，因为它注册在开曼群岛。**（[Semafor](https://www.semafor.com/article/05/09/2025/us-treasury-examining-benchmark-capitals-ties-to-chinese-startup-manus-ai)、[Proskauer 法律分析](https://www.proskauer.com/blog/treasurys-latest-moves-fast-track-for-foreign-investors-and-outbound-ai-investment-inquiry)）

一年前还是全网嘲讽的"套壳"，一年后成了通过美国监管审查的法律护身符。而"注册在开曼所以不是中国公司"这句话，在 11 个月后会被北京用最强硬的方式反驳。

这次审查是整个故事的转折点。它给 Manus 传递了一个非常清晰的信号：**你身上的"中国属性"会持续给你的美元融资、你的估值、你的退出路径打折。**

于是他们决定把它切掉。

---

## 七、2025 年夏天：删号、裁员、搬去新加坡

2025 年 6 月，Manus 合伙人张涛在一次活动上公开宣布：公司总部已从中国迁至新加坡，运营主体变为 Butterfly Effect Pte.，并开始在新加坡本地招聘（[腾讯新闻](https://news.qq.com/rain/a/20250708A06ULO00)、[36氪](https://36kr.com/p/3200393697427076)）。

7 月，切割开始动刀子。

据当时多家媒体报道：中国区约 **120 名员工**中，**40 余名核心技术人员被调往新加坡**，其余人员"优化"，赔偿方案为 N+3 或 2N（[腾讯新闻](https://news.qq.com/rain/a/20250708A06ULO00)、[国际电子商情](https://www.esmchina.com/news/13256.html)、[澎湃新闻《Manus 彻底撤出中国》](https://m.thepaper.cn/newsDetail_forward_31167906)）。与此同时，官方微博和小红书账号被清空，中文版产品不可用，中国大陆 IP 访问官网会看到 "Manus is not available in your region"（[知乎话题汇总](https://www.zhihu.com/question/1927315994994537412)、[澎湃](https://m.thepaper.cn/newsDetail_forward_31167906)）。

新加坡那边同时在开出月薪 8000–16000 美元（年薪超 130 万人民币）的岗位招人（[DoNews](https://www.donews.com/news/detail/1/5609624.html)）。

这套操作在业内有个专门的名字：**Singapore-washing（新加坡洗白）**——用新加坡实体给中国创始的公司套上一层"全球身份"，以便融美元、卖美国、避审查（[Fortune，2026 年 3 月](https://fortune.com/2026/03/09/singapore-washing-us-china-shein-manus/)）。SHEIN 是这条路的先行者，Manus 是最激进的执行者：它不是分拆，是**整体迁移加彻底清场**。

需要说清楚的是，这里存在两种不同性质的叙事，各自都有拥护者：

一种是"生存说"。在美国把中国 AI 公司列入投资限制、算力受限、又必须依赖 Claude 等美国模型 API 的情况下，不切割就没有增长空间。Manus 主要收入在海外，用户在海外，模型在海外，公司留在中国反而处处受制。

另一种是"背叛说"。中文舆论场当时的情绪相当激烈：一家吃着中国工程师红利、拿着腾讯红杉真格的钱、靠中文互联网的舆论声量起家的公司，转身把简中痕迹删得一干二净。"[全网首个爆料 Manus 裁员消息的人，如何看待其彻底撤出中国一事？](https://finance.ifeng.com/c/8kx2qJaIzDU)"这类标题在 7 月满天飞。

商业上，这一步在当时看是成功的。政治上，这一步是整个故事里最致命的错误。

---

## 八、沉默期里的暴力增长

被中文舆论骂完之后，Manus 在 2025 年下半年做了一件反直觉的事：它闭嘴了，然后开始疯长。

- **2025 年 7 月**：推出 **Wide Research**，可并发调用最多 100 个子智能体同时工作，把研究类任务的执行时间大幅压缩。
- **2025 年 10 月 16 日**：发布 **Manus 1.5**，速度提升 4 倍，平均任务耗时从 15 分钟降到 4 分钟以内，新增全栈 Web 应用开发能力。
- **2025 年 12 月**：发布 **Manus 1.6 Max**，加入 Design View，双盲测试用户满意度提升逾 19.2%。

（产品节奏来源：[Sacra](https://sacra.com/c/manus/)、[Manus 官方博客](https://manus.im/blog/manus-100m-arr)、[NamuWiki 汇总](https://en.namu.wiki/w/Manus%20AI)）

财务数字更夸张。**上线 8 个月，ARR 突破 1 亿美元**，官方称这是全球初创公司从 0 到 1 亿美元 ARR 的最快纪录；到 2025 年 12 月，总收入 run-rate 超过 1.25 亿美元（[Manus 官方博客](https://manus.im/blog/manus-100m-arr)、[Bloomberg，2025 年 12 月 17 日](https://www.bloomberg.com/news/articles/2025-12-17/manus-says-sales-hit-125-million-run-rate-months-after-launch)、[SCMP](https://www.scmp.com/tech/tech-trends/article/3336925/manus-hits-us100-million-revenue-milestone-global-competition-ai-agents-heats)）。定价上，早在 2025 年 3 月底就推出了 39 美元和 199 美元两档订阅（[WinBuzzer](https://winbuzzer.com/2025/03/31/manus-ai-launches-paid-plans-after-viral-demand-offering-39-and-199-tiers-xcxwbn/)）。

到收购公告时，Manus 称系统累计处理超过 **147 万亿 tokens**、创建了超过 **8000 万台虚拟计算机**（[收购报道汇总](https://www.techradar.com/pro/meta-buys-manus-for-usd2-billion-to-power-high-stakes-ai-agent-race)）。

一个只有约 100 人的团队，一年时间做到这个数字。**"套壳"这件事，在财务报表上被证明是对的。**

---

## 九、2025 年 12 月 29 日：卖给 Meta

2025 年 12 月 29 日，Meta 宣布以**超过 20 亿美元**收购 Manus（Butterfly Effect），交易同日交割（[TechCrunch](https://techcrunch.com/2025/12/29/meta-just-bought-manus-an-ai-startup-everyone-has-been-talking-about)、[CNBC](https://www.cnbc.com/2025/12/30/meta-acquires-singapore-ai-agent-firm-manus-china-butterfly-effect-monicai.html)、[Euronews](https://euronews.com/next/2025/12/31/meta-to-acquire-ai-startup-manus-in-deal-valued-at-over-2-billion)）。据报道，Manus 当时本来在以 20 亿美元估值募新一轮，Meta 半路截胡；Meta 吸收其约 100 名员工，计划把 Manus 技术整合进 WhatsApp 和 Meta AI，同时保留独立订阅服务。

关于**具体价格存在分歧**：多数媒体口径是"超过 20 亿美元"，但也有报道称实际对价接近 30 亿美元（[the-decoder](https://the-decoder.com/meta-pays-3-billion-for-manus-ai-after-startup-cut-all-chinese-ties-to-clear-regulatory-hurdles/)）。后续回购报道普遍采用"约 20 亿美元原价"，本文以 20 亿美元为准。

最关键的一句话来自 Meta 发言人：交易完成后，**"Manus AI 不存在任何持续的中国所有权权益"**，且平台将终止在中国的服务与运营（[Fortune，2025 年 12 月 30 日](https://www.fortune.com/2025/12/30/meta-manus-acquisition-claims-no-chinese-ownership-singapore)）。

从纯商业角度，这是一次教科书级的退出：从 2025 年 4 月的 5 亿美元估值，到 12 月的 20 亿美元交割，8 个月 4 倍；创始团队和早期投资人（含腾讯、红杉中国、真格、Benchmark）全部套现。中文媒体年末盘点的标题写得毫不客气：「[Manus 的一年：爆火、出走与"卖身"](https://finance.sina.cn/2025-12-30/detail-inheqcrt5863018.d.html)」。

值得注意的一个细节是时间点：**中国的元旦假期前夕，公告发出，交易当日交割。** 北京方面在公告后的头几天，一个字都没说。

---

## 十、2026 年 1 月 8 日：北京开口了

沉默在 2026 年 1 月 8 日结束。中国商务部发表声明，称该交易需符合中国有关**出口管制、技术转让和对外投资**的法律（[Fortune 相关报道](https://fortune.com/2026/03/09/singapore-washing-us-china-shein-manus/)、[TechCrunch](https://techcrunch.com/2026/04/27/china-vetoes-metas-2b-manus-deal-after-months-long-probe/)）。

监管方的论证逻辑，恰好是 Benchmark 律师那套说辞的镜像：**Manus 由中国工程师创立，核心技术在中国境内产生，仍存在中国母体关联，因此应受中国司法管辖**——注册地在开曼、总部在新加坡，都不改变这一点。

接下来三个月，事情迅速失控：

**2026 年 3 月**：监管部门将 CEO **肖弘**和首席科学家**季逸超**召至北京问询，随后**限制两人离境**（[The Legal Wire](https://thelegalwire.ai/china-restricts-manus-founders-from-leaving-the-country-amid-investigation-into-metas-2bn-acquisition/)、[Techweez](https://techweez.com/2026/03/25/meta-manus-ai-acquisition-exit-ban/)、[AOL/Benzinga 转载](https://www.aol.com/finance/china-bar-manus-co-founders-043122766.html)）。这是**北京首次以限制高管出境的方式，阻断一桩与美国科技巨头的数十亿美元交易**。两位创始人无法离境，意味着 Meta 与 Manus 的全球团队整合事实上被冻结。

**2026 年 3 月 27 日**，[CNBC 的一篇报道](https://www.cnbc.com/2026/03/27/meta-manus-china-review-singapore-washing-model-regulation-.html)记录了当时整个亚洲创投圈的震动。新加坡的一位 AI 行业顾问 Matthias Hendrichs 说得很直白："**Singapore-washing，也就是只在本地设个法律实体、雇几个本地员工，远远不够。**" 报道的核心判断是：北京不希望建立在中国技术生态和工程师红利之上的公司，换个门牌就把核心创新带走。

**2026 年 4 月 27 日**，国家发改委正式下令：**撤销该交易，双方须解除已完成的收购**（[TechCrunch](https://techcrunch.com/2026/04/27/china-vetoes-metas-2b-manus-deal-after-months-long-probe/)、[Concurrences 判例摘要](https://www.concurrences.com/en/bulletin/news-issues/april-2026/the-chinese-office-of-the-working-mechanism-for-foreign-investment-security)）。

在国际并购法律圈，这一天是有分量的。多家律所的分析口径一致：这是中国 **外商投资安全审查（FISR）机制自 2020 年建立以来，第一次强制拆解一笔已经交割的交易**，也是 AI 领域第一起被公开叫停的收购（[O'Melveny 客户提示](https://www.omm.com/insights/alerts-publications/china-unwinds-meta-s-acquisition-of-manus-implications-for-cross-border-ai-transactions/)、[Lexology](https://www.lexology.com/library/detail.aspx?g=2175a4dd-124d-419d-a93e-d3ea5bd84726)、[Shumaker 客户提示](https://www.shumaker.com/insight/china-made-meta-give-back-a-2-billion-artificial-intelligence-acquisition-what-it-means-for-your-next-cross-border-deal/)）。

以往各国的安全审查通常在交割前介入。**交割后 4 个月，人已经并进去了、系统已经打通了，再要求全部退回来**——这是一个新的先例，也是给所有做"离岸架构"的中国科技公司的一次公开示范。

---

## 十一、2026 年 6–8 月：把一家公司从另一家公司身上剥下来

判决之后是执行，而执行远比公告难看。

**2026 年 6 月上旬**，[Bloomberg](https://www.bloomberg.com/news/articles/2026-06-11/meta-severs-manus-data-access-after-china-orders-buyout-unwound) 率先披露：Manus 及其员工已被切断对 Meta 内部数据系统的访问，Meta 员工也不能再在内部项目中使用 Manus 工具。一份内部备忘录要求员工把现有 Manus 项目迁回 Meta 自有系统，不要在该平台上启动新工作——用词是 **"sunsetting"（日落/下线）**（[The Next Web](https://thenextweb.com/news/meta-manus-data-split-china-unwind-acquisition)、[CNBC，6 月 12 日](https://www.cnbc.com/2026/06/12/meta-reportedly-begins-dismantling-2-billion-manus-deal-on-beijings-orders.html)、[TechCrunch，6 月 13 日](https://techcrunch.com/2026/06/13/meta-reportedly-moves-to-unwind-2b-manus-deal-after-beijings-demand/)）。原本要把 Manus 的 agent 能力灌进 Meta AI 的数据管道被关掉，但据报道，Manus 与 Meta Ads Manager、Instagram 的部分连接仍然保留（[Tom's Hardware](https://www.tomshardware.com/tech-industry/artificial-intelligence/meta-cuts-manus-off-from-its-internal-systems-as-china-ordered-breakup-of-2-billion-ai-deal-begins)）。

**2026 年 7 月上旬**，剧情反转到最戏剧性的地方：**一个由腾讯牵头的财团，以 20 亿美元原价从 Meta 手里把 Manus 买了回来**。参与方包括 Manus 的早期投资人红杉中国（HSG）和真格基金；而在 Meta 交易中已经套现离场的美国投资人 Benchmark，**不在这个财团里**。交易完成后，腾讯将成为 Manus 单一最大股东，但仍为少数股权，Manus 继续在新加坡以独立公司运营（[Tech Startups](https://techstartups.com/2026/07/10/tencent-leads-2b-buyback-of-manus-after-china-forces-meta-to-unwind-ai-startup-acquisition/)、[TechTimes](https://www.techtimes.com/articles/320160/20260711/tencent-lead-2b-manus-buyback-beijing-treats-agentic-ai-sovereign-asset.htm)、[36氪国际版](https://eu.36kr.com/en/p/3866588633469956)、[Startup Fortune](https://startupfortune.com/tencent-leads-buyback-of-ai-startup-manus-from-meta-at-original-price/)）。

绕了一整圈：**腾讯 2024 年投的公司，2025 年套现给 Meta，2026 年又原价买回来，中间还多了一层"国家意志"的背书。**

**2026 年 8 月 11 日**，Manus 发布《致用户的一封信》，宣布即将恢复独立运营，并公告数据删除安排（[CNBC](https://www.cnbc.com/2026/08/11/manus-china-meta-acquisition.html)、[Manus 官方博客](https://manus.im/blog/a-note-to-our-users)、[新浪财经](https://finance.sina.com.cn/stock/usstock/c/2026-08-11/doc-inimyhiz0553942.shtml)）。

**8 月中旬**，有报道称北京计划很快解除两位创始人的出境限制，肖弘已告知员工计划返回新加坡；回购以约 20 亿美元估值进行，仍待监管最终批准（[俄罗斯卫星通讯社中文版](https://sputniknews.cn/20260813/1072763041.html)、[转载汇总](https://www.bannedbook.org/bnews/itnews/20260815/2349260.html)）。**这一条目前仍属报道，未见官方确认，请以后续公告为准。**

然后，就有了你收件箱里的那封信。

---

## 十二、从安全与合规视角，这封邮件真正说了什么

跳出商业叙事，这件事对做安全/合规的人有几层直接的启示。

**第一，"数据的国籍"第一次被执行到了记录级。** 监管命令要求撤销交易，而 Manus 的执行方式是按交割日切分数据集，删除 2025-12-29 之后产生的部分。这意味着监管方（或其法律顾问）认可的合规颗粒度，已经细到"哪些数据是在哪个所有权结构下生成的"。对任何做跨境 SaaS 的公司来说，这是一个新的架构要求：**数据分区必须能按股权变更时间点切开**，而不只是按地域切开。

**第二，"不可撤销"的技术整合，正在变成一种法律风险。** Meta 在 4 个月里把 Manus 接进了内部系统、Ads Manager、Instagram，然后必须在 2 个月内拆掉。任何一次并购后的深度技术整合，现在都得考虑"如果被要求逆转，我能不能干净地退回去"。这在尽调清单里过去几乎不存在。

**第三，法律实体和技术主权是两码事。** Benchmark 的律师用"开曼注册 + 只是套壳"通过了美国审查，但北京的认定标准是**技术来源地和人**。公司可以搬，代码可以搬，**人搬不走**——限制出境这一手，直接说明了在这套逻辑里，什么才是真正被视为受管制的资产。有分析文章的标题概括得很到位：「[中国让 Meta 买走了 Manus，但留下了造它的人](https://www.insightnews.com/news/china-let-meta-buy-manus-it-kept-the-people-who-built-it/article_7d22fa7f-75f5-4196-83a7-4345243be279.html)」。

**第四，对普通用户而言，这是一次"合规导致的可用性事故"。** 没有攻击、没有漏洞、没有泄露，但你的数据照样会在指定时间点被销毁，且不可恢复。Manus 自己也强调这不是安全事件。可用性和完整性的威胁来源，不止是攻击者。

---

## 十三、哪些是实锤，哪些还是传闻

写这类文章最容易翻车的地方，是把爆料当事实。把话说清楚：

**有可靠来源、可视为事实的：** Manus 2025 年 3 月发布；2025 年 4 月 Benchmark 领投 7500 万美元、估值 5 亿美元；2025 年 5 月美国财政部就该投资进行问询；2025 年 6–7 月总部迁往新加坡并裁撤中国团队；2025 年 12 月 29 日 Meta 完成收购；2026 年 1 月 8 日中国商务部表态；2026 年 3 月创始人被限制出境（多家媒体报道，无官方公告）；2026 年 4 月 27 日发改委下令撤销交易；2026 年 6 月 Meta 开始切割；2026 年 7 月腾讯牵头财团回购；2026 年 8 月 11 日 Manus 官方公告独立与数据删除。

**属于报道/未完全证实的：**
- 收购总价究竟是"超过 20 亿"还是接近 30 亿美元，各家口径不一。
- 裁员的具体人数（约 120 人、40 余人转岗）来自中文媒体爆料与员工爆料，未见公司正式披露。
- 邀请码"炒到 10 万元"是平台挂单价，不等于实际成交价；官方明确否认存在付费渠道。《华尔街日报》的口径（超过 1000 美元）保守得多。
- 创始人限制出境的解除、腾讯财团回购的最终监管批准，截至本文写作时仍在进行中。
- 3 月的"越狱"内容出自单一用户的公开演示，公司未逐条确认技术细节，仅由季逸超作了原则性回应。

**纯属圈内小道、只能当谈资的：** 关于 Manus 团队在被收购前是否早已内部知情、关于哪些高管在新加坡拿到了什么条件、关于阿里合作后来事实上无疾而终的原因——这些在中文创投圈流传甚广，但我没有找到可引用的来源，因此不写进正文。附带一句：季逸超在被收购公告当天放出了与播客《张小珺｜商业访谈录》的长访谈（[节目页](https://podcasts.apple.com/cn/podcast/128-manus%E5%86%B3%E5%AE%9A%E5%87%BA%E5%94%AE%E5%89%8D%E6%9C%80%E5%90%8E%E7%9A%84%E8%AE%BF%E8%B0%88-%E5%95%8A-%E8%BF%99%E5%A5%87%E5%B9%BB%E7%9A%842025%E5%B9%B4%E6%BC%82%E6%B5%81%E5%95%8A/id1634356920?i=1000743131736)），标题就叫"Manus 决定出售前最后的访谈"，是目前信息密度最高的一手材料。

---

## 十四、时间线

| 时间 | 事件 |
|---|---|
| 2015 | 肖弘华科毕业，在武汉创业，做壹伴助手/微伴助手 |
| 2022 | 创立蝴蝶效应（Butterfly Effect），推出 Monica |
| 2023 | Monica 收购 "ChatGPT for Google"，海外用户破 700 万 |
| 2024-11 | A 轮，腾讯、红杉中国领投，真格、王慧文跟投 |
| 2025-03-06 | Manus 发布，20 小时播放破百万，350 万人申请内测 |
| 2025-03-07 | 邀请码被炒至 5–10 万元，官方否认付费渠道 |
| 2025-03-10 | 用户 jian 越狱沙盒，曝出基于 Claude Sonnet + 29 工具 |
| 2025-03-11 | 宣布与阿里通义千问战略合作 |
| 2025-03-中 | MetaGPT 团队 3 小时做出 OpenManus |
| 2025-03-31 | 推出 39 / 199 美元订阅 |
| 2025-04-25 | Benchmark 领投 7500 万美元，估值 5 亿美元 |
| 2025-05-09 | 美国财政部审查 Benchmark 该笔投资（OISP / 反向 CFIUS） |
| 2025-06 | 宣布总部迁至新加坡，主体变更为 Butterfly Effect Pte. |
| 2025-07 | 中国团队大规模裁员，社交账号清空，国内不可访问 |
| 2025-07 | 推出 Wide Research（最多 100 个并发子智能体） |
| 2025-10-16 | Manus 1.5 发布，速度提升 4 倍 |
| 2025-12-17 | Bloomberg：收入 run-rate 超 1.25 亿美元，ARR 8 个月破 1 亿 |
| 2025-12-29 | Meta 以超 20 亿美元完成收购，称"无持续中国所有权" |
| 2026-01-08 | 中国商务部声明：交易须符合出口管制与对外投资法律 |
| 2026-03 | 肖弘、季逸超被约谈并限制出境，整合停摆 |
| 2026-04-27 | 发改委下令撤销交易，FISR 机制首次强拆已交割并购 |
| 2026-06-11 | Meta 切断 Manus 系统访问，内部要求 "sunsetting" |
| 2026-07-10 | 腾讯牵头财团以 20 亿美元原价回购，Benchmark 不参与 |
| 2026-08-11 | Manus 宣布恢复独立运营，公告数据删除安排 |
| 2026-08-23~24 | 删除 2025-12-29 之后产生的受影响数据 |
| 2026-08-25 | 服务恢复，Manus 以独立公司身份重新开始 |

---

## 十五、结尾：这只蝴蝶扇出了什么

Manus 这家公司的名字取自"蝴蝶效应"，这在 2026 年回头看有点过于应景。

它是第一家在 AI Agent 这个品类上做出全球规模收入的中国团队公司；也是第一家因为"中国血统"同时被华盛顿和北京审查的公司；还是第一家被中国监管强制从美国科技巨头手里"拆回来"的公司。它证明了套壳可以赚到 1.25 亿美元的年化收入，也证明了法律注册地救不了你。

有意思的是最后的结果：**公司还在新加坡，业务还在全球，创始团队还是那两个 1992 年出生的人，但最大股东变回了腾讯。** 兜了一整圈，Manus 回到了 2024 年 11 月 A 轮之后的股东结构——只是这一次，全世界都知道它究竟属于谁了。

而对于收到那封邮件的用户来说，这一切的具体表现就是：你在 2026 年 8 月 23 日之前得把东西导出来，否则它就没了。地缘政治最终落到个人身上的形态，往往就是一个倒计时和一个"Back up data"按钮。

---

## 参考来源

**官方/一手**
- [Manus, A Note to Our Users](https://manus.im/blog/a-note-to-our-users)
- [Manus Help Center: Service Change Overview](https://help.manus.im/en/articles/16147831-service-change-overview-what-s-happening-and-am-i-affected)
- [Manus Update: $100M ARR, $125M revenue run-rate](https://manus.im/blog/manus-100m-arr)
- [张小珺｜商业访谈录 128：Manus 决定出售前最后的访谈](https://podcasts.apple.com/cn/podcast/128-manus%E5%86%B3%E5%AE%9A%E5%87%BA%E5%94%AE%E5%89%8D%E6%9C%80%E5%90%8E%E7%9A%84%E8%AE%BF%E8%B0%88-%E5%95%8A-%E8%BF%99%E5%A5%87%E5%B9%BB%E7%9A%842025%E5%B9%B4%E6%BC%82%E6%B5%81%E5%95%8A/id1634356920?i=1000743131736)

**并购与监管**
- [CNBC: Meta acquires intelligent agent firm Manus (2025-12-30)](https://www.cnbc.com/2025/12/30/meta-acquires-singapore-ai-agent-firm-manus-china-butterfly-effect-monicai.html)
- [TechCrunch: Meta just bought Manus (2025-12-29)](https://techcrunch.com/2025/12/29/meta-just-bought-manus-an-ai-startup-everyone-has-been-talking-about)
- [Fortune: Meta claims no Chinese ownership (2025-12-30)](https://www.fortune.com/2025/12/30/meta-manus-acquisition-claims-no-chinese-ownership-singapore)
- [TechCrunch: China blocks Meta's $2B Manus deal (2026-04-27)](https://techcrunch.com/2026/04/27/china-vetoes-metas-2b-manus-deal-after-months-long-probe/)
- [O'Melveny: China Unwinds Meta's Acquisition of Manus](https://www.omm.com/insights/alerts-publications/china-unwinds-meta-s-acquisition-of-manus-implications-for-cross-border-ai-transactions/)
- [Lexology: China Orders Unwinding of Meta-Manus Deal](https://www.lexology.com/library/detail.aspx?g=2175a4dd-124d-419d-a93e-d3ea5bd84726)
- [Concurrences: FISR prohibits BigTech acquisition (Meta/Manus)](https://www.concurrences.com/en/bulletin/news-issues/april-2026/the-chinese-office-of-the-working-mechanism-for-foreign-investment-security)
- [Bloomberg: Meta Severs Manus Data Access (2026-06-11)](https://www.bloomberg.com/news/articles/2026-06-11/meta-severs-manus-data-access-after-china-orders-buyout-unwound)
- [CNBC: Manus to return as independent company (2026-08-11)](https://www.cnbc.com/2026/08/11/manus-china-meta-acquisition.html)
- [Tech Startups: Tencent leads $2B buyback (2026-07-10)](https://techstartups.com/2026/07/10/tencent-leads-2b-buyback-of-manus-after-china-forces-meta-to-unwind-ai-startup-acquisition/)

**融资与美国审查**
- [TechCrunch: Benchmark at $500M valuation (2025-04-25)](https://techcrunch.com/2025/04/25/chinese-ai-startup-manus-reportedly-gets-funding-from-benchmark-at-500m-valuation/)
- [Semafor: US Treasury examining Benchmark's ties (2025-05-09)](https://www.semafor.com/article/05/09/2025/us-treasury-examining-benchmark-capitals-ties-to-chinese-startup-manus-ai)
- [Proskauer: Treasury's Outbound AI Investment Inquiry](https://www.proskauer.com/blog/treasurys-latest-moves-fast-track-for-foreign-investors-and-outbound-ai-investment-inquiry)

**出境限制与 Singapore-washing**
- [CNBC: Beijing's surprise intervention rattles founders, VCs (2026-03-27)](https://www.cnbc.com/2026/03/27/meta-manus-china-review-singapore-washing-model-regulation-.html)
- [The Legal Wire: China restricts Manus founders from leaving](https://thelegalwire.ai/china-restricts-manus-founders-from-leaving-the-country-amid-investigation-into-metas-2bn-acquisition/)
- [Fortune: The 'Singapore-washing' strategy starts to unwind](https://fortune.com/2026/03/09/singapore-washing-us-china-shein-manus/)
- [Semafor: Singapore-washing isn't over. Manus may have done it wrong](https://www.semafor.com/article/05/04/2026/singapore-washing-isnt-over-manus-may-have-just-done-it-wrong)
- [Rest of World: Will the Meta-Manus deal push more Chinese AI startups to Singapore?](https://restofworld.org/2026/meta-manus-singapore/)

**中文媒体与早期报道**
- [新浪财经：Manus 创始人肖弘：从小镇少年到 AI 黑马](https://finance.sina.com.cn/roll/2025-03-09/doc-inenzieq7906272.shtml)
- [新浪科技：邀请码炒到 10 万！Manus 真"颠覆"还是真"炒作"？](https://finance.sina.com.cn/tech/roll/2025-03-07/doc-inenvmwk9821012.shtml)
- [21 世纪经济报道：Manus 底层解码："套壳"下的创新"越狱"](https://www.21jingji.com/article/20250314/herald/8a720bebb4a366cd3c5ba1607d921b61.html)
- [腾讯云开发者社区：Manus 被破解了？曝出系统提示词和背后大模型](https://cloud.tencent.com/developer/article/2503845)
- [澎湃新闻：5 个人三小时复刻开源版 Manus](https://www.thepaper.cn/newsDetail_forward_30331141)
- [新浪财经：Manus 与阿里通义千问达成战略合作](https://finance.sina.com.cn/tech/roll/2025-03-11/doc-inephsqm2596938.shtml)
- [腾讯新闻：Manus 大规模裁员，总部迁至新加坡](https://news.qq.com/rain/a/20250708A06ULO00)
- [澎湃新闻：Manus 彻底撤出中国](https://m.thepaper.cn/newsDetail_forward_31167906)
- [36氪：Manus 或面临备案监管问题](https://36kr.com/p/3200393697427076)
- [澎湃：Manus 背后的华人团队：套壳到极致，就是胜利](https://m.thepaper.cn/newsDetail_forward_30320407)
- [创业邦：十二年前的季逸超报道](https://www.cyzone.cn/article/792156.html)
- [新浪科技：2025 AI 启示录｜Manus 的一年：爆火、出走与"卖身"](https://finance.sina.cn/2025-12-30/detail-inheqcrt5863018.d.html)
- [第一财经：Manus 即将恢复以独立公司的形式运营](https://www.yicai.com/news/103314207.html)

**综合资料**
- [Wikipedia: Manus (AI agent)](https://en.wikipedia.org/wiki/Manus_(AI_agent))
- [Sacra: Manus revenue, funding & news](https://sacra.com/c/manus/)
- [SCMP: Manus hits US$100 million revenue milestone](https://www.scmp.com/tech/tech-trends/article/3336925/manus-hits-us100-million-revenue-milestone-global-competition-ai-agents-heats)
