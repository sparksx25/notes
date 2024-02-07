# vue3 术语表

- [异步组件 (async component)](https://cn.vuejs.org/glossary/#async-component)
- [编译器宏 (compiler macro)](https://cn.vuejs.org/glossary/#compiler-macro)
- [组件 (component)](https://cn.vuejs.org/glossary/#component)
- [组合式函数 (composable)](https://cn.vuejs.org/glossary/#composable)
- [组合式 API (Composition API)](https://cn.vuejs.org/glossary/#composition-api)
- [自定义元素 (custom element)](https://cn.vuejs.org/glossary/#custom-element)
- [指令 (directive)](https://cn.vuejs.org/glossary/#directive)
- [动态组件 (dynamic component)](https://cn.vuejs.org/glossary/#dynamic-component)
- [作用 (effect)](https://cn.vuejs.org/glossary/#effect)
- [事件 (event)](https://cn.vuejs.org/glossary/#event)
- [片段 (fragment)](https://cn.vuejs.org/glossary/#fragment)
- [函数式组件 (functional component)](https://cn.vuejs.org/glossary/#functional-component)
- [变量提升 (hoisting)](https://cn.vuejs.org/glossary/#hoisting)
- [DOM 内模板 (in-DOM template)](https://cn.vuejs.org/glossary/#in-dom-template)
- [注入 (inject)](https://cn.vuejs.org/glossary/#inject)
- [生命周期钩子 (lifecycle hooks)](https://cn.vuejs.org/glossary/#lifecycle-hooks)
- [宏 (macro)](https://cn.vuejs.org/glossary/#macro)
- [具名插槽 (named slot)](https://cn.vuejs.org/glossary/#named-slot)
- [选项式 API (Options API)](https://cn.vuejs.org/glossary/#options-api)
- [插件 (plugin)](https://cn.vuejs.org/glossary/#plugin)
- [Prop](https://cn.vuejs.org/glossary/#prop)
- [提供 / 注入 (provide / inject)](https://cn.vuejs.org/glossary/#provide-inject)
- [响应式作用 (reactive effect)](https://cn.vuejs.org/glossary/#reactive-effect)
- [响应性 (reactivity)](https://cn.vuejs.org/glossary/#reactivity)
- [响应性 API (Reactivity API)](https://cn.vuejs.org/glossary/#reactivity-api)
- [ref](https://cn.vuejs.org/glossary/#ref)
- [渲染函数 (render function)](https://cn.vuejs.org/glossary/#render-function)
- [调度器 (scheduler)](https://cn.vuejs.org/glossary/#scheduler)
- [作用域插槽 (scoped slot)](https://cn.vuejs.org/glossary/#scoped-slot)
- [SFC](https://cn.vuejs.org/glossary/#sfc)
- [副作用 (side effect)](https://cn.vuejs.org/glossary/#side-effect)
- [单文件组件 (Single-File Component)](https://cn.vuejs.org/glossary/#single-file-component)
- [插槽 (slot)](https://cn.vuejs.org/glossary/#slot)
- [模板 ref (template ref)](https://cn.vuejs.org/glossary/#template-ref)
- [VDOM](https://cn.vuejs.org/glossary/#vdom)
- [虚拟 DOM (virtual DOM)](https://cn.vuejs.org/glossary/#virtual-dom)
- [VNode](https://cn.vuejs.org/glossary/#vnode)
- [Web Component](https://cn.vuejs.org/glossary/#web-component)


## 异步组件 (async component)
- `defineAsyncComponent` 方法用于将一个组件包装为异步加载组件。一个标记为异步加载的组件仅在需要渲染时才加载该组件。
- 异步组件加载完成之后触发加载完成的回调，回调中调用异步组件所在上下文的 $forceUpdate 方法重新执行一次渲染操作。
- Vue Router 也有类似的功能，用于路由懒加载，但这并不是通过 Vue 的异步组件功能实现的。
- Vue Router 的路由懒加载是依赖于 ES6 的 import() 函数加载指定的 JS 文件，并不是由 Vue 框架内部直接处理。


## 组合式函数 (composable)
类似于 React 的自定义 hooks

## 变量提升
在 Vue 上下文中，模板编译器应用了静态变量提升来提高性能。在将模板转换为渲染函数时，对应于静态内容的 VNode 可以只创建一次然后被重复使用。这些静态 VNode 是被提升的，因为它们是在渲染函数运行之前，在其外面创建的

## 调度器 (scheduler)
当响应式状态发生变化时，Vue 不会立即触发渲染更新。取而代之的是，它会通过队列实现批处理。这确保了即使对底层数据进行了多次更改，组件也只重新渲染一次。