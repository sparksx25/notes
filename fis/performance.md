# 性能优化

## 性能优化分类
- 加载时优化
- 运行时优化


## 加载时性能优化
- 减少 HTTP 请求数量
一个完整的 HTTP 请求需要经历 DNS 查找，TCP 握手，浏览器发出 HTTP 请求，服务器接收请求，服务器处理请求并发回响应，浏览器接收响应等过程
  1. 使用 CSS Sprites
  2. 内联图像 data: URL

- 使用缓存
  1. 缓存通用 js,css
  2. 缓存图片，字体等资源
  3. 主页的内容可以选择内联
  4. ETag 在使用服务器群集处理请求上存在问题

- 静态资源使用 CDN
  1. 

- 服务器支持 gzip 压缩格式。Content-Encoding: gzip, Accept-Encoding: gzip。
  1. deflate 压缩效果不是很理想
  2. 图像和 PDF 文件不应进行 gzip 压缩，因为它们已被压缩。尝试将它们 gzip 压缩不仅会浪费 CPU，还可能会增加文件大小。

- 减小文件体积：代码压缩, tree-shaking

- 按需加载脚本

- 将 CSS 放在文件头部，JavaScript 文件放在底部，脚本加上 defer
  1. 空白的白屏
  2. 无样式内容的闪烁

- 减少 DNS 查找
  1. 将内容分发到至少两个但不超过四个主机

- 避免重定向

- 使用服务端渲染

- 使用 HTTP2

- 优化图片加载，图片压缩

- 延迟 图片,iframe 加载



## 运行时优化
- 减少重排与重绘
  1. 防抖与节流
  2. 防止强制布局与布局抖动

- 使用事件委托
- 使用 requestAnimationFrame 实现动画
- 使用 Web Workers
- 任务切片
- 减少 DOM 元素的数量：如虚拟列表

- 合理提升元素层级(translateZ,will-change)


## chrome 
消除阻塞渲染的资源
适当调整图片大小
对图片进行高效编码
推迟显示屏幕外图片
压缩 CSS
缩减 JavaScript
启用文本压缩 gzip




## 参考文档
- [chrome: performance](https://web.dev/learn/performance)
- [chrome开发者平台: 性能审核](https://developer.chrome.com/docs/lighthouse/performance/unminified-javascript?hl=zh-cn)
- [chrome开发者平台](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources?hl=zh-cn)
- [雅虎: 网站优化最佳实践](https://developer.yahoo.com/performance/rules.html)
