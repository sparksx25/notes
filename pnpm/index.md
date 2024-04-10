# pnpm

- motivation
- 支持通过 `.npmrc` 文件配置npm
- 通过`pnpm-workspace.yaml` 文件配置单体仓库

## MOTIVATION
- 节省磁盘空间
  1. 同一个包缓存不同版本中变化的文件
  2. 将所有包安装到本地指定目录，后续从该目录拉取包

- 加快安装速度
- 非扁平化管理 `node_modules`, 加载不在依赖配置中的文件会出错

## 常用命令
安装所有包
pnpm install

安装包
pnpm add

删除包
pnpm remove