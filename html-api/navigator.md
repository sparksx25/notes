# navigator

## 实例
```
Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/51.0.2704.103 Safari/537.36
```

## userAgent
navigator.userAgent 返回用户浏览器相关信息，包含
- 遵循的规范，规范版本（如 Mozilla）
- 操作系统内核，操作系统类型，操作系统版本
- 渲染引擎/版本，现在市面上有 5 个主流的渲染引擎：Trident，Gecko，Presto，Blink 和 WebKit
- 浏览器名称/版本，浏览器版本（如：chrome/firfox），可能会包含多个浏览器名称


```
Chrome 的用户代理字符串中既会包含 Chrome 又会包含 Safari。所以为了检测 Safari 浏览器，
你不得不检测其中是否有 Safari 字符串同时没有 Chrome 字符串，Chromium 也经常汇报它自己是 Chrome 浏览器
```


## Reference
- [MDN: 使用用户代理字段进行浏览器检测](https://developer.mozilla.org/zh-CN/docs/Web/HTTP/Browser_detection_using_the_user_agent)