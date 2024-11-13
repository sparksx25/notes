- [官方: ts-node 文档](https://typestrong.org/ts-node/docs/configuration)

## feature
1. 支持加载 `tsconfig` 配置
2. 如果没有提供 `tsconfig` 则会根据当前的 node 版本自动适配合适的 `tsconfig` 配置。
3. 支持原生 EMS Loader


## 注意
1. ts-node 受当前 node 版本影响，因为不同的 node 版本，模块加载器的支持情况不同。
2. `package.json` 配置中的 `type` 字段会影响 ts-node 的模块解析系统
