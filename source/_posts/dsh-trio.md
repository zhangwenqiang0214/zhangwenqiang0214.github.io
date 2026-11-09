---
title: DSH Trio，把 DeepSeek Harness 带到 iPhone
date: 2026-11-09 10:18:00
tags:
  - DeepSeek
  - SwiftUI
  - Docker
  - 自建服务
cover: /img/cover-dsh-trio.jpg
categories:
  - 折腾记录
---

我想在 iPhone 上做三件事。随手问 DeepSeek 一个问题，合上 Mac 后还能派个带文件的任务，出门时也能接着看 Mac 上正在改的项目。这三件事用起来都像聊天，真正动起来却各有各的地方。比如让模型帮我整理一份资料，可以交给云端。要接着改手头的代码，就得回到有那份工作区的 Mac。

DSH Trio 就是从这三个场景做出来的。iPhone 上有 Chat、Work、Code 三个入口，分别对应直接对话、云端任务和远程 Mac。项目沿用了 DSH_Mobile 的协议层和连接器底座，上游采用 MIT 许可。 [DSH_Mobile](https://github.com/jayantTang/DSH_Mobile)

<!-- more -->

## 先定会话放哪，再定怎么连

| 模式 | 执行位置 | 会话历史 | 手机走哪条链路 |
| --- | --- | --- | --- |
| Chat | DeepSeek API | iPhone 本地 | HTTPS 请求 Chat 网关，SSE 返回增量 |
| Work | 云端 Docker 容器里的 DSH | 云端 DSH 宿主 | WSS / DLP，经 relay 到云端连接器 |
| Code | Mac 上的 DSH | Mac 上的 DSH 宿主 | WSS / DLP，经 relay 到 Mac 连接器 |

App 用 SwiftUI 写，Swift 协议层 DSHKit 负责 RPC 和会话事件。中转和 Chat 网关用 Python/aiohttp，连接器跑在 Node.js/Cordis 上。Work 和 Code 共用一套协议和连接器，App 给它们各自维护连接状态。切到 Code 时，打开的是 Mac 上那条会话。切回 Work 时，看到的仍是云端任务的进度。

## Chat 的历史留在手机

发消息时，App 从本机历史取出当轮需要的上下文，和新消息一起交给网关。网关用设备凭据识别请求，由服务端持有的 API Key 调用 DeepSeek，然后把结果流回手机。聊天历史由 App 保存，网关只处理当前请求。

打开联网搜索后，模型可以请求 `web_search`。网关执行搜索，把结果作为工具消息交回模型，来源卡也取自这次搜索的实际返回。一次回答可能经历多次模型调用，所以用量按这次回答汇总。识图则走视觉模型，一张图就可以发出去。

流式响应里，思考、正文、来源、用量和结束是不同的事件。一段长回复刚显示半截，点了停止，这半截得留在历史里。马上发下一问时，上一轮迟到的事件也得丢掉。App 按请求区分这些事件，并把正常结束、异常断流和主动停止分别处理。

## Work 和 Code 共用一条中转链路

Mac 和云容器里的连接器主动向 relay 建立 WSS。iPhone 也连 relay，由 relay 按已经认证的设备与目标 agent 路由。这样手机在外面也能访问 Mac 上的会话，Mac 无需对公网开放 DSH 端口。

手机侧的 `LinkCarrier` 把单次 RPC 和持续订阅分别装进 DLP 的 `req` 帧与 `open` 帧。连接器在目标机器上把请求交给 DSH 的 HTTP RPC 或 mux。这里有个具体的兼容点，DSH mux 要收 WebSocket 文本帧，误发二进制帧会被宿主以 `1003` 关闭。连接器也会在启动时核对 DSH 版本，项目目前锁定 `0.2.1-rc.2`。

设备令牌放在 iOS Keychain，并按连接目标隔离。relay 负责鉴权和转发，DSH 宿主自己维护会话。TLS 在自建入口终止，中转路径可以读到经过的帧，所以它也在这套系统的信任边界内。

## Work 的资源卡读的是容器实测值

Work 里的 DSH 以非 root 用户运行，根文件系统只读，Compose 设置 CPU 和内存上限。DSH 状态和工作区各用一个持久卷，换容器时可以沿用原数据。容器里的连接器沿用同一套出站链路，DSH 端口留在容器内部。

Work 首页能看 CPU、内存和工作区所在磁盘。CPU 和内存取自容器自己的 cgroup v2。CPU 先读 `cpu.stat` 的累计用时，用两次采样的差除以实际经过的单调时间，得到这段时间平均用了几核。有 `cpu.max` 的配额，才进一步计算占上限的比例。内存读 `memory.current` 和 `memory.max`。磁盘用 `statfs` 查工作区所在文件系统，显示该文件系统的可用和总容量。标签得写清楚，因为这个数字也会受到同一文件系统上其他目录的影响。

## Code 要处理同一会话的写权

手机打开 Mac 上的会话时，先分页取历史，再从游标跟随后续事件。子 agent 还需要一组复合地址，由父会话 ID、子会话 ID 和模式共同定位。正文、工具执行和审批都跟着宿主的会话走。

两端能打开同一条会话，写入仍得由宿主裁决。锁定版 DSH 遇到另一进程占着写句柄，会返回 `session/writer-held`。手机会保留本次发送内容并提示写权冲突。即使列表上显示会话空闲，持有写句柄的另一端也可能还没释放。派生桌面方案让桌面窗口、同宿主的浏览器和手机共用一个 Host，由它核对空闲状态并处理用户显式发起的接管。这个方案已有候选实现，手机和桌面的双向接管还待完整真机验收。

## 目前跑到了哪

iPhone 真机已跑过三种模式的基础收发、Chat 的搜索与识图。Work 也做过一次容器重启验证，重连后能从手机打开原会话和文件。DSH Trio 目前是自用开发版，完整真机验收和源码公开前的检查仍在进行。
