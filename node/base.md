# Node 基础知识

## process 全局变量
该变量包含了当前进程运行环境相关的信息
```json
{
    // 使用的 node 版本
    "version": "v20.12.1",
    // 64位CPU
    "arch": "x64",
    // 32位版本的 windows 操作系统
    "platform": "win32",

    // 当前用户命令行设置的环境变量
    "env": {
        // windows 可执行文件路径
        "Path": "C:\\Users\\xuekun\\softs\\nvm;C:\\Program Files\\nodejs",

        // 常用的自定义环境变量
        "NODE_ENV": "",
    },


    // 运行当前程序时传递的参数，前两个位置参数表达的含义是固定的
    "argv": [
        "C:\\Program Files\\nodejs\\node.exe",
        "C:\\Users\\xuekun\\person\\rollup\\index.js"
    ],

    // 用于退出进程的函数
    "kill": "[Function: kill]",
    "exit": "[Function: exit]",

    // 返回当前程序入口脚本所在目录的路径
    "cwd": "[Function: wrappedCwd]",

    // 注册一个在下一次事件循环之前执行的回调函数
    "nextTick": "[Function: exit]",
}
```

## process.env.NODE_ENV 的由来
Node.js 社区的约定：NODE_ENV 是一个常用的环境变量名，虽然它不是 Node.js 核心的一部分，但已成为 Node.js 应用程序中广泛接受的标准约定。

- 开发环境（development）：用于开发和调试代码。
- 测试环境（test）：用于运行自动化测试。
- 生产环境（production）：用于实际用户使用的应用程序。


## 确定模块系统
Node.js v12 及更高版本同时支持 ESM 和 CJS，每个 ESM 和 CJS 都使用自己的模块解析算法

node 通过以下方式确认 ESM 模块系统。其余情况均认为是 CommonJS 模块。
1. 以 `.mjs` 结尾的文件。
2. 当最近的父文件中的 package.json 包含 `"type": "module"` 时， `.js` 文件将会被当做 ES modules 处理。
3. 使用 node 运行 js 文件时，携带了 `--input-type=module` 参数。
4. `以 .mjs` 结尾的文件始终作为 ES 模块加载，`以 .cjs` 结尾的文件始终作为 CommonJS 模块加载，而不管最近的父package.json如何。

- [nodejs官网: 模块系统-如何确定当前文件使用的模块系统](https://nodejs.org/docs/latest-v14.x/api/packages.html#packages_determining_module_system)


## 核心模块的引入
核心模块也可以使用 `node：` 前缀来标识(`require('node:http')`)，在这种情况下，它会绕过 require 缓存。


## 模块解析算法
ESM 模块解析规则:
1. 相对说明符，如 './startup.js' 或 '../config.mjs' 的它们引用相对于导入文件位置的路径。对于这些，文件扩展名始终是必需的
2. 绝对说明符，如 'file:///opt/nodejs/config.js'，它们直接且显式地引用**完整路径**。
3. 裸露的说明符，如 'some-package'。可以根据 `package.json` 中 “exports” 字段进行加载，如果存在则只能按 "exports"指定的进行加载， 如果没有该字段则需要包含路径及文件扩展名进行访问.裸说明符分辨率由 **Node.js 模块分辨率算法**处理。所有其他说明符解析始终仅使用标准相对 URL 解析语义进行解析。
4. 默认不支持自动拓展名解析，且只接受 JavaScript 文本文件的 .js、.mjs 和 .cjs 扩展名, 不支持 .node , .json 拓展名（需要使用断言），不支持目录的 index 文件自动解析，不支持导入 json 文件，不支持根据 `NODE_PATH` 环境变量解析模块。
5. 支持自定义 ESM 模块解析算法 `node --experimental-specifier-resolution=node index`

- [node 官网: ESM 模块解析规则](https://nodejs.org/docs/latest-v14.x/api/esm.html#esm_resolver_algorithm_specification)
- [node 官网: require 解析规则](https://nodejs.org/docs/latest-v14.x/api/modules.html)



## 模块引用
1. 不支持使用 `require` 加载 ES 模块，因为 ES 模块具有异步执行;
2. CommonJs 循环依赖，将会返回部分导出
3. import 语句可以引用 ES 模块或 CommonJS 模块。import 语句只允许在 ES 模块中使用，但 CommonJS 支持动态 `import()` 表达式来加载 ES 模块。
4. `import` CommonJS 模块时，module.exports 对象作为默认导出提供。


## API
要获取调用 `require()` 时将加载的确切文件名，请使用 `require.resolve()` 函数。