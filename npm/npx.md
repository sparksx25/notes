# npx
从本地或远程 npm 包运行命令


## usage
```
npx -- <pkg>[@<version>] [args...]
npx --package=<pkg>[@<version>] -- <cmd> [args...]
npx -c '<cmd> [args...]'
npx --package=foo -c '<cmd> [args...]'


e.g.:
# 不安装 commitlint 包，使用本地的 commitlint 可执行文件， --edit 是 commitlint 命令的参数
npx --no -- commitlint --edit
```


## reference
- [npx](https://docs.npmjs.com/cli/v10/commands/npx)