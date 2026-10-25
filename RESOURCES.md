# Go 后端阶段 1 Resources

## Knowledge

- [《后端就业学习路线》](./后端就业学习路线-全面版.md)
  本工作区的阶段划分与过关标准来源。Use for: 核对阶段 1 四类“必须掌握”和 Go CLI 过关线，不用来扩展超纲内容。
- [A Tour of Go](https://go.dev/tour/)
  Go 官方交互式入门。Use for: 变量、零值、slice、map、struct、方法、接口、goroutine、channel 和 select 的第一遍学习。
- [Effective Go](https://go.dev/doc/effective_go)
  Go 官方惯用写法指南。Use for: 包与命名、方法、接口、错误和并发的语言习惯。
- [The Go Programming Language Specification](https://go.dev/ref/spec)
  Go 语言规范。Use for: 对零值、方法集、channel 行为和值语义做权威核对。
- [Go Slices: usage and internals](https://go.dev/blog/slices-intro)
  Go 官方博客。Use for: slice 的数组、长度、容量和 append 扩容行为。
- [Working with Errors in Go 1.13](https://go.dev/blog/go1.13-errors)
  Go 官方错误处理文章。Use for: `%w`、`errors.Is` 与 `errors.As`。
- [Defer, Panic, and Recover](https://go.dev/blog/defer-panic-and-recover)
  Go 官方博客。Use for: defer 的执行顺序以及 panic/recover 的边界。
- [Go Concurrency Patterns: Context](https://go.dev/blog/context)
  Go 官方博客。Use for: context 的传递、取消和截止时间。
- [Package context](https://pkg.go.dev/context)
  Go 标准库文档。Use for: `WithCancel`、`Done`、`Err` 的准确接口。
- [Go Modules Reference](https://go.dev/ref/mod)
  Go 官方模块参考。Use for: `go mod init`、依赖版本和最小版本选择。
- [Testing and Benchmarking](https://pkg.go.dev/testing)
  Go 标准库测试文档。Use for: 表格驱动测试、子测试与 benchmark 的准确写法。
- [Data Race Detector](https://go.dev/doc/articles/race_detector)
  Go 官方竞态检测器文档。Use for: `go test -race` 的能力和使用方式。
- [golangci-lint documentation](https://golangci-lint.run/)
  社区维护的多 linter 聚合器。Use for: Go 工程中的静态检查入口。
- [Package os](https://pkg.go.dev/os)
  Go 标准库文档。Use for: 参数、环境变量、文件读写和退出码。
- [Package path/filepath](https://pkg.go.dev/path/filepath)
  Go 标准库文档。Use for: Linux/Windows 通用的路径拼接、扩展名和目录遍历。
- [Package net/http](https://pkg.go.dev/net/http)
  Go 标准库文档。Use for: handler、`ServeMux` 和 HTTP 客户端的最低用法。
- [Package encoding/json](https://pkg.go.dev/encoding/json)
  Go 标准库文档。Use for: `Marshal`、`Unmarshal` 和结构体 JSON 标签。
- [Package database/sql](https://pkg.go.dev/database/sql)
  Go 标准库文档。Use for: 连接池、`PingContext`、查询、执行和 `Scan`。

## Wisdom (Communities)

- [Go Forum](https://forum.golangbridge.org/)
  Go 社区论坛。Use for: 带最小复现、完整报错和已尝试方案的实现问题。
- [r/golang](https://www.reddit.com/r/golang/)
  Go 社区。Use for: 工具、学习路径与工程习惯的交叉验证；先搜索再提问。
- [Go issue tracker](https://github.com/golang/go/issues)
  Go 官方问题库。Use for: 核对疑似编译器或标准库缺陷；普通用法问题不要先提交 issue。

## Gaps

- 尚未验证用户是否已经安装 Go 或可用的 Linux/WSL 环境；第一次实操前先检查 `go version`。
- 阶段 1 不展开具体数据库驱动；`database/sql` 先学接口，驱动在进入实际数据库项目时再补。
