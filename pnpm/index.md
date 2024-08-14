# pnpm

## Feature
- 节省磁盘空间
  1. 同一个包缓存不同版本中变化的文件
  2. 将所有包安装到本地指定目录，后续从该目录拉取包

- 加快安装速度

- 非扁平化管理 `node_modules`, 加载不在依赖配置中的文件会出错

- 支持单体仓库([monorepo](https://monorepo.tools/))



## CLI
**`pnpm -C <path>`**   
Run as if pnpm was started in `path` instead of the current working directory.

**`pnpm -w`**   
Run as if pnpm was started in the root of the workspace instead of the current working directory.



## pnpm-lock.yaml
- 将 `pnpm-lock.yaml` 提交到 git 仓库的好处
    1. 在 CI 和生产环境中能够更快地完成安装，因为解析依赖的过程可以被跳过。
    2. 保持生产环境和开发环境安装的包相同

- `.npmrc` 文件
npm 加载模块时会从 项目，用户，全局，npm 内置的 `.npmrc` 文件中加载配置。

npm支持将作用域与注册表关联.

```ini
registry=https://registry.npmmirror.com/
@chagee:registry=http://nexus.bwcjxt.com/repository/npm-snapshots/
```


## pnpm-workspace.yaml
packages: 定义自定义包
catalogs: 定义公共依赖版本
在 `package.json`中支持通过 `workspace:`引用自定义包，通过`catalog:`引用公用依赖及版本

```yaml
packages:
    - docs
    - play
catalogs:
```
