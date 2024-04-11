# Features

## 基于 ES 模块
1. 使用 JavaScript 的 ES6 版本中包含的新标准化代码**模块格式**，即支持使用`import` `export` 进行模块的导入导出
2. 可以使用模块解析插件，支持不同的模块解析方式

## 静态资源处理
1. Rollup 可以处理非模块资源文件，例如图片、字体、样式表等
2. 导入资源文件：在你的 JavaScript 源码中，可以导入非模块资源文件
   

## 产物
1. 可以根据需要将产物打包成 `UMD`, `CMD`, `AMD`, `ESM` 格式
2. 支持同时输出多个模块格式的产物
3. 当两个入口点都导入了相同的共享块。Rollup 永远不会复制代码，而是创建额外的块，仅加载必要的最少量
4. 产物干净，几乎没有额外的运行时辅助脚本
  

## Tree-shaking
1. rollup 对 Tree-shaking 的支持程度比较高


## 支持代码分割
以下情况会进行代码分割：
1. 使用 `import()`方法动态加载的模块
2. 多个入口点
3. 使用 `output.manualChunks` 选项手动管理分割代码块 

- [代码分割](https://cn.rollupjs.org/tutorial/)


## 模块加载优化
将当前模块中依赖模块的子模块的依赖提升到当前模块，可以通过 `output.hoistTransitiveImports` 选项关闭该行为
- [模块加载优化](https://cn.rollupjs.org/faqs/)


## 兼容性
1. 通过 `@rollup/plugin-commonjs` 插件支持导入现有的 CommonJS 模块