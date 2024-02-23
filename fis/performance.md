# 性能优化


## 性能优化分类
- 加载时优化
- 运行时优化


## 加载时性能优化
- 减少 HTTP 请求资源的数量   
  一个完整的 HTTP 请求需要经历 DNS 查找，TCP 握手，浏览器发出 HTTP 请求，服务器接收请求，服务器处理请求并发回响应，浏览器接收响应等过程，所以请求是比较耗时的。
  1. 不引入未使用的资源
  2. 合理的合并 js，css文件，如 js 与 css 合并成一个文件，多个 js 文件或 css 文件合并到一个文件
  3. 较小的图片 icon 转成 base64 内联到代码中
  4. 使用 字体图标，CSS Sprites 替代图片 icon
  3. 部分 js，css 可以内联到 CSS，JS 中


- 优化 HTTP 请求资源的大小
  1. minimize js： 压缩，混淆(存在代码异常的风险) javaScript 
  2. tree-shaking：使用 ES Module 静态加载的特性对 javaScript 进行 tree-shaking
  3. code splitting：根据路由或功能进行代码拆分
  4. minimize css: 压缩 css
  5. optimize css: css 属性简写合并，使用 less，scss 时不要嵌套过深
  6. zip: 使用 Brotli, Gzip 算法对资源进行压缩传输。


- 使用 HTTP 缓存
  1. 缓存不易发生改变的通用 js，css，img，字体等资源


- 静态资源部署到 CDN
  1. 使用 CDN 缩短资源的传输距离，CDN 通过 DNS 将请求路由到离用户距离较近的 CDN 节点


- 优化图片加载
  1. 压缩图片
  2. 使用合理的图片尺寸，根据需要加载合适大小的尺寸。如使用 img 的 srcset 属性，使用 picture 加载图片
  3. 图片懒加载


- 避免资源重定向
  example.com/page/ 重定向到 example.com/page


- 资源预加载
  1. 使用 `<link>` 标签预获取资源如 `<link rel="prefetch" href="/chunk.js"/>` 


- 优化服务器请求资源响应速度


- 使用 HTTP2


- 使用服务端渲染
  1. 服务端渲染可以减少请求的往返，将部分数据或资源内置到 HTML 中
  2. 相比客户端渲染，能够让浏览器的"预加载扫描程序"起作用


- 将 CSS 放在文件头部
  1. 长时间的白屏
  2. 内容因样式加载完毕应用样式导致布局跳动


- 将 js 文件放在`html`标签底部，延迟加载 js   
  1. 使用 async 加载的脚本会在**下载后立即解析和执行**,async 脚本可能会不按顺序执行。
  2. 而使用 defer 加载的脚本会在 HTML 文档解析完成时执行，defer 脚本则会按照它们在标记中出现的顺序执行。defer 不能用于内联脚本。



## 运行时优化
- 防止强制布局与布局抖动以减少重排与重绘
- 防抖与节流
- 使用事件委托减少事件的注册
- 使用 requestAnimationFrame 实现动画
- 使用 Web Workers
- 长任务(占用浏览器主线程超过 50ms 以上的任务就是长任务)使用时间切片
- 减少 DOM 元素的数量：如虚拟列表
- 使用 transform，will-change 实现动画，通过合成更新界面


## 性能优化工具
1. 使用 chrome 的 lighthouse 面板评估网站性能，并根据提供的优化建议进行改进


## 关于客户端渲染
1. 必须等待脚本下载，解析，执行之后才知道需要加载的资源，预加载扫描程序失去了作用。


## 关于资源压缩传输
1. 优先使用 Brotli, Gzip 对资源进行压缩。 deflate 压缩效果不是很理想。 
2. 图像和 PDF 文件不应进行 gzip 压缩，因为它们已被压缩。尝试将它们 gzip 压缩不仅会浪费 CPU，还可能会增加文件大小。


## 参考文档
- [chrome: performance](https://web.dev/learn/performance)
- [chrome开发者平台: 性能审核](https://developer.chrome.com/docs/lighthouse/performance/unminified-javascript?hl=zh-cn)
- [chrome开发者平台](https://developer.chrome.com/docs/lighthouse/performance/render-blocking-resources?hl=zh-cn)
- [雅虎: 网站优化最佳实践](https://developer.yahoo.com/performance/rules.html)
- [MDN: script标签的async与defer属性](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/script)
