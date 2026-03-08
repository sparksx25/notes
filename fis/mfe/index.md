# 微前端(Micro Frontend)

## Table of Content
- Benefits（收益）
- Integration approaches（集成方式）
- styling（样式冲突）
- Shared component libraries（共享组件库）
- Cross-application communication（跨应用通讯）
- Downsides（缺点）
- Reference

## Benefits
- Incremental upgrades（增量升级）
- Simple, decoupled codebases（简单、解耦的代码库）
- Independent deployment （独立部署）
- Autonomous teams（分团队开发）


## Integration approaches
- Build-time integration（npm构建时集成）
  1. 各个团队负责某个功能模块的开发，开发好之后发布为单独的 npm 包，在构建时进行集成
  2. 需要全量编译和发布（npm包中保存的应是源码）

- Run-time integration via iframes: （运行时使用 iframe 集成）
  1. 使用 iframe，在运行时进行动态路由切换
  2. [iframe 实现微前端的优缺点](./iframe.md)

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

## Downsides（缺点）
- 独立构建的 JavaScript 包可能会导致常见依赖项的重复。
    1. 可以将重复的依赖独立出去，这就存在耦合，且存在不同子应用使用了相同依赖的不同版本
    2. 可以忍受重复依赖，不存在支持相同依赖的不同版本，因为代码分割的原因，利大于弊。

- 环境差异, 线上环境与开发环境不同存在的差异（如 css 冲突），依赖与测试环境发现这些集成差异



## FAq
- [FAQ](./faq.md)


## Reference
- [软件开发: 微前端详细介绍](https://martinfowler.com/articles/micro-frontends.html)
- [各微前端框架对比](https://zhuanlan.zhihu.com/p/634567028)
- [各个微前端框架之间的一个对比](https://lianpf.github.io/posts/frontend-develop/microfrontend_framework_compare/)

