# 微前端

## Table of content
- [微前端出现的背景](./introduce.md)



## 乾坤
qiankun 中为子应用样式添加前缀实现子应用间的样式隔离，样式预加载的功能由 `import-entry-html`库提供支持。

## Shadow DOM 与 React
- 挂载在 Shadow DOM 中的 React 应用，事件冒泡存在问题 
- shadow DOM中想要派发自定义事件到组件外面，需要通过 shadow host 元素派发

## 微前端需要解决的问题
1. 样式隔离
2. js 隔离
3. DOM 隔离
4. 挂载在 Shadow DOM 中的 React 应用，事件冒泡存在问题 
5. Shadow DOM 里面触发的事件无法冒泡
6. 应用脚本只加载一次


## 样式隔离
1. 可以使用 `postcssPrefixSelector` 插件为所有打包样式添加类名前缀。但是当这个弹窗的插入到 body 时，由于类名前缀层级关系不存在了，所以会出现样式错乱问题
