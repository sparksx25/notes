# android 兼容问题

## location.reload() 
浏览器html 页面`location.reload()`方法执行之后会重新加载文档
android 内嵌 h5页面 `location.reload()` 方法执行之后不会重新加载文档。

解决方法:
```javascript
const reload = () => {
  const url = new URL(location.href)
  url.searchParams.delete('t')
  url.searchParams.append('t', String(Date.now()))
  location.replace(url.toString())
}
```
