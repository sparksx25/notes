# npm 

## 操作手册
- [语义化版本](./semver.md)
- [语义化版本示例](./semver-sample.md)
- [npm 常用命令行](./cli.md)
- [npx 的使用](./cli.md)
- [package.json 字段含义](./cli.md)
- [npm 脚本](./script.md)
- npm 配置


## 安装说明
npm 安装项目依赖时，会根据项目 `package.json` 中的 `dependencies`, `peerDependencies`, `devDependencies`
配置安装其直接依赖，然后根据依赖包中 `package.json` 的 `dependencies`, `peerDependencies`配置递归安装其依赖。

注: 在安装项目依赖的依赖时，只会安装 `dependencies`, `peerDependencies` 配置指定的依赖。


## npm配置
- npm 支持通过 命令行，环境变量， 项目`.npmrc`文件，根`.npmrc`配置，如下载镜像配置


## 切换镜像
- [官方注册表](https://registry.npmmirror.com/vue-echarts)
- [淘宝注册表](https://registry.npmmirror.com/vue)


## Reference
- [npm, pnpm, yarn 之间的区别](https://blog.logrocket.com/javascript-package-managers-compared/)


