# typeScript 配置

## 安装 ts
1. 局部安装 `npm install -D typescript`
2. 全局安装 `npm install -g typescript`


## 切换 vscode ts 语法提示版本（仅供语法提示）
vscode 默认内置了最新的TS稳定版本作为语法提示，也可以使用项目中的 ts 版本
1. 可以在命令面板选择 ts 版本
2. settings.json中配置 `"typescript.tsdk": "node_modules/typescript/lib"`

- [vscode官网：选择新的ts版本](https://code.visualstudio.com/docs/typescript/typescript-compiling#_using-newer-typescript-versions)


## references 配置
- 这是 TypeScript 3.0 新增的 “项目引用（Project References）” 功能，它允许用户为项目的不同部分使用不同的 TypeScript 配置.
- 使用 references 字段引入的配置文件需要设置 composite: true 字段