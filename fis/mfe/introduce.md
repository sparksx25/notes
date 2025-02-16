# 微前端(Micro Frontends)

## Table of Content
- Benefits
- Integration approaches
- styling
- Shared component libraries
- Cross-application communication
- Downsides
- Reference

## Benefits
- Incremental upgrades（增量升级）
- Simple, decoupled codebases（简单、解耦的代码库）
- Independent deployment （独立部署）
- Autonomous teams（分团队开发）


## Integration approaches
- Server-side template composition（服务端模板组合）

- Build-time integration
  1. 各个团队负责某个功能模块的开发，开发好之后发布为单独的 npm 包，在构建时进行集成
  2. 需要全量编译和发布（npm包中保存的应是源码）

- Run-time integration via iframes: 
  1. 使用 iframe，在运行时进行动态路由切换
  2. [为什么不使用 iframe?](https://www.yuque.com/kuitos/gky7yw/gesexv)

- Run-time integration via JavaScript（推荐）
  1. 每个应用暴露一个 render 方法，在对应路由激活时执行相应的 render 方法

- Run-time integration via Web Components
  1. 将每个应用包装成组件，在对应路由激活时挂载相应的组件


## styling
样式冲突问题：CSS 作为一种语言本质上是全局的、继承的和级联的，传统上没有模块系统、命名空间或封装


## Shared component libraries
统一组件风格，创建共享组件，对于不同的技术栈 UI 库一般是不一样的，可以使用基于 web-components 的组件库。


## Cross-application communication
子应用之间的通信，如用户授权需要同步到各个子应用
1. 应用之间通过 URL 或 自定义事件进行通信

## Downsides
- 独立构建的 JavaScript 包可能会导致常见依赖项的重复。
    1. 可以将重复的依赖独立出去，这就存在耦合，且存在不同子应用使用了相同依赖的不同版本
    2. 可以忍受重复依赖，不存在支持相同依赖的不同版本，因为代码分割的原因，利大于弊。

- 环境差异, 线上环境与开发环境不同存在的差异（如 css 冲突），依赖与测试环境发现这些集成差异



## FAq
1. 重复依赖?
2. 支持同依赖的不同版本?
3. 服务端渲染支持?
4. 子应用嵌套?
5. 统一路由同时激活多个子应用?
6. 样式隔离，基于 web-component 实现的样式隔离，存在某些插件将样式插入到 shadow boundary 外部的 Domcument tree 中


## Reference
- [软件开发: 微前端详细介绍](https://martinfowler.com/articles/micro-frontends.html)
- [各微前端框架对比](https://zhuanlan.zhihu.com/p/634567028)
- [各个微前端框架之间的一个对比](https://lianpf.github.io/posts/frontend-develop/microfrontend_framework_compare/)