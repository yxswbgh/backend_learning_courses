# 后端学习路线 · Go-only 教学工作区

这个项目基于 B 站 UP 主 **鸟谷真琴 makoto** 的后端学习路线制作，并结合 Codex 的 **teach skill** 组织成一套可持续跟踪的学习工作区。



## 当前目标

用 Go 快速打通阶段 1 的四类最低能力：

- 语言基础：零值、slice/map、struct、接口、错误包装、`defer/panic/recover`。
- 并发：goroutine、channel、`select`、同步原语和 context。
- 工程化：Go module、包、格式化与 lint、表格驱动测试、race 和 benchmark。
- 标准库：`net/http`、`encoding/json`、`time`、`os`、`io`、`database/sql`。

当前里程碑是独立完成 Linux 命令行工具 `filemix`：递归统计目录中的文件扩展名分布。Java 相关内容和路线中的“可以先跳过”部分不在当前范围内。

完整目标与边界见 [MISSION.md](./MISSION.md)。

## 从哪里开始

1. 先阅读 [阶段 1 Go 最低过关课程](./lessons/0002-stage1-go-minimum-and-cli-challenge.html)。
2. 写代码时查阅 [阶段 1 Go 最低速查表](./reference/stage1-go-minimum-reference.html)。
3. 完成课程末尾的 `filemix` 过关题，并逐项跑验收命令。
4. 遇到问题时带着最小复现、完整报错、已尝试方案和当前代码询问老师。
5. 需要补工具基础时，复习 [阶段 0 环境工具课](./lessons/0001-stage0-environment-toolkit.html)。

这些 HTML 文件可以直接在浏览器中打开，不需要启动开发服务器。

## teach skill 如何参与

这个工作区采用 teach skill 的状态化教学结构：

| 文件或目录 | 作用 |
|---|---|
| [MISSION.md](./MISSION.md) | 当前为什么学、成功标准、约束和范围外内容 |
| [RESOURCES.md](./RESOURCES.md) | 经过筛选的官方文档与社区资源 |
| [NOTES.md](./NOTES.md) | 教学偏好、范围约定和后续注意事项 |
| [lessons/](./lessons/) | 按阶段组织的自包含课程与过关题 |
| [reference/](./reference/) | 可打印、可长期复用的速查资料 |
| [learning-records/](./learning-records/) | 学习目标变化和已验证理解的决策记录 |
| [assets/](./assets/) | 所有课程共享的样式、脚本和交互组件 |

课程遵循“先用可信资源获取知识，再通过练习形成技能，最后用真实任务验收”的流程。每个阶段只教当前目标所需的内容，避免把阶段 1 扩成 Java、GMP 或编译器专题。


## 运行环境

- 阅读课程：任意现代浏览器。
- 完成 Go 题目：Go 工具链，以及 Linux 或 WSL 终端。
- 题目只允许使用 Go 标准库；命令行、构建和运行示例统一采用 Linux 语法。

开始实操前先确认环境：

```bash
go version
```

## 更新原则

- 学习目标变化时，先更新 `MISSION.md`，再调整课程和过关题。
- 只收录高可信资源，并在 `RESOURCES.md` 中注明用途。
- 课程是主要教学单元，速查表是可复用的压缩知识；避免把同一份内容重复维护。
- 只有出现可观察的学习证据时才写新的 `learning-records/` 条目。
- 当前阶段不主动扩展到阶段 2 的 Web 框架、数据库设计、缓存、消息队列和项目内容。

## 资料来源与致谢

- 学习路线来源：B 站 UP 主 **鸟谷真琴 makoto**。
- 课程组织方式：Codex **teach skill** 的状态化教学工作区模式。
- Go 技术依据：以 [A Tour of Go](https://go.dev/tour/)、[Effective Go](https://go.dev/doc/effective_go) 和 Go 标准库文档为主，具体条目见 [RESOURCES.md](./RESOURCES.md)。

本项目仅用于个人学习整理。引用、转载或再分发路线内容时，请尊重原作者的权利与署名。
