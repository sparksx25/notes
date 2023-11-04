# 页面渲染流程


## 文档解析流程
```js
app.use(async (ctx) => {
    const url = ctx.url
    console.log(`url: ${url}`)
    if (url === '/favicon.ico') {
        ctx.status = 200
        ctx.body = null
        return
    }
    if (url === '/') {
        ctx.status = 200
        ctx.set('Content-Type', 'text/html; charset=utf-8')
        ctx.body = fs.readFileSync('./public/index.html').toString('utf-8')
        return
    }
    if (url.includes('.css')) {
        return new Promise((resolve) => {
            setTimeout(() => {
                ctx.status = 200
                ctx.set('Content-Type', 'text/css; charset=utf-8')
                ctx.body = fs.readFileSync('./public/index.css').toString('utf-8')
                resolve()
            }, 5000)
        })
    }
})
```
```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1 class="h1">关键渲染路径: 是否必须等到 css 加载完成在生成 render 树</h1>
    <link rel="stylesheet" href="./index.css"/>
    <h2>22222222222222222222222</h2>
</body>
</html>
```

1. `<link rel="stylesheet" href="index.css">` 标签会阻塞解析 `HTML`，直到
样式加载完成, 才继续解析后面的内容。样式未加载完成之前，浏览器会将当前以解析的部分内容渲染到页面。

2.  在 js 脚本前面的 `<link rel="stylesheet" href="index.css">` 标签会阻塞 js 脚本的执行


## 页面渲染流程
[谷歌开发者文档-页面的关键渲染路径](https://web.dev/articles/critical-rendering-path?hl=zh-cn)




## 优化页面流畅度
[知乎: 让你的网页更丝滑(一)](https://zhuanlan.zhihu.com/p/66398148)
[知乎: 让你的网页更丝滑-全](https://zhuanlan.zhihu.com/p/67728054)