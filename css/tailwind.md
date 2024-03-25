# tailwind css

## Installation
tailwind 官方提供了 `tailwindcss` 工具包。
该工具包根据配置，支持将指定模板文件中使用到的 tailwind 格式的类样式按需添加到指定css文件中。
该工具包同时也可以作为 postCSS 编译工具的插件使用。

## Editor Integrate
- 官方提供了相应的 vscode 插件，优化开发体验，书写智能提示
- 官方还提供了 `prettier` 插件，支持格式化代码，排序类型

## Browser Support
Tailwind CSS v3.0 是针对最新的稳定版本的 Chrome、Firefox、Edge 和 Safari 进行设计和测试的。它不支持任何版本的 IE，包括 IE 11。

需要使用 `autoprefixer` 添加属性前缀，某些属性需要浏览器前缀支持。

## 功能和指令
1. 可以使用指令自定义基础样式，工具样式，组件样式。指令的位置决定了自定义样式的位置
2. 除此之外也可以通过插件自定义样式
3. Vue 组件中的样式不能使用 tailwind 指令
   
## Reference
- [tailwindcss 中文网](https://www.tailwindcss.cn/docs/overflow)
- [tailwindcss UI库](https://tailwindcomponents.com/components/pages)
- [tailwind 界面参考](https://demos.creative-tim.com/soft-ui-dashboard-pro-tailwind/pages/ecommerce/products/edit-product.html)