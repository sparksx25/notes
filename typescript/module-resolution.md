# TS Module Resolution
TS模块解析系统，支持以下几种解析策略:

- classic: TypeScript 最早的模块解析模式，并计划在 TypeScript 6.0 中弃用

- node10: 官方不建议使用

- node16: Node.js v12 及更高版本同时支持 ESM 和 CJS，每个 ESM 和 CJS 都使用自己的模块解析算法。在Node.js中，import 语句和动态 import() 调用中的模块说明符不允许省略文件扩展名或 /index.js 后缀，而调用中的 require 模块说明符可以省略

- nodenext

- bundler: Node.js v12 引入了一些用于导入 npm 包的新 package.json 模块解析功能（和 "exports" "imports" 的字段），许多打包器采用了这些功能，但没有采用更严格的 ESM 导入规则。此模块解析模式为面向打包器的代码提供了基本算法。默认情况下，它支持 package.json "exports" 和 "imports"


## 类型定义文件查找路径
查找过程会依据不同的模块解析策略（如 Node 和 Classic，其中 Node 是现代项目常用的策略），在多个可能的位置搜索类型定义文件。
相对导入:
1. 直接查找 .ts 或 .tsx 文件：首先会在当前文件所在目录下，按照相对路径查找对应的 .ts 或 .tsx（适用于 JSX 项目）文件
2. 查找 .d.ts 文件：若未找到 .ts 或 .tsx 文件，TypeScript 会接着查找同名的 .d.ts 文件
3. 查找文件夹下的入口文件：如果相对路径指向一个文件夹而非具体文件，TypeScript 会在该文件夹中查找

非相对导入:
1. 检查 package.json 中的 types 或 typings 字段：TypeScript 会在 node_modules 目录下找到对应的包，然后查看该包的 package.json 文件。若存在 types 或 typings 字段，会根据其指定的路径加载类型定义文件
2. 查找 index.d.ts 文件：若 package.json 中没有 types 或 typings 字段，TypeScript 会在包的根目录下查找 index.d.ts 文件
3. 查找 @types 目录：如果在包的根目录下未找到类型定义文件，TypeScript 会在 node_modules/@types 目录中查找


typeRoots 选项：默认情况下，TypeScript 会从 node_modules/@types 目录中查找类型定义文件。通过设置 typeRoots，可以自定义类型定义文件的搜索路径

types 选项：若设置了 types，TypeScript 只会加载列出的包中的类型定义文件，而忽略其他的类型定义文件

files、include 和 exclude 选项：files 直接指定要包含的文件，include 指定需要编译的文件或目录，exclude 指定需要排除的文件或目录。这些选项会限制 TypeScript 编译器搜索类型文件的范围。


## Reference
- [TypeScript 模块解析](https://www.typescriptlang.org/docs/handbook/modules/theory.html#module-resolution-is-host-defined)

- [typescript 的模块系统介绍](https://www.typescriptlang.org/docs/handbook/modules/reference.html#node16-nodenext)
