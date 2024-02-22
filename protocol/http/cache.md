# 缓存

## 浏览器兼容性
所有浏览器都支持以下首部：
- Cache-Control
- ETag
- Last-Modified


## HTTP 缓存的工作原理
浏览器发出的所有 HTTP 请求都会先路由到浏览器缓存，如果浏览器缓存存在则直接使用缓存响应请求。   

HTTP 缓存的行为由请求标头和响应标头的组合控制。浏览器都支持本地缓存功能，当响应标头包含缓存指令时会根据缓存指令
将响应缓存到本地。再次请求该资源时，若缓存过期，请求标头中将添加 `If-Modified-Since` `If-None-Match` 标头，服务器检查了新鲜度之后，
若缓存未过期则返回`304 Not Modified` 响应标头告诉浏览器可以继续使用缓存，否则将返回 `200 OK` 以及最新的内容。  


## 新鲜度检查
响应标头可以返回 `ETag` 或 `Last-Modified`  标头用于验证过期的缓存资源。
发出请求时会携带 `If-Modified-Since`标头，值为响应标头`Last-Modified`的值，
或者携带 `If-None-Match`标头，值为响应标头 `ETag`的值。   


ETag
- 基于资源内容生成 hash 
- 配合 If-None-Match 请求首部进行新鲜度检查
- ETag 在使用服务器群集处理请求上存在不匹配的问题


Last-Modified
- 此标头的用途与 ETag 相同，但与 ETag 的基于内容的策略不同，它使用基于时间的策略来确定资源是否已更改
- 配合 If-Modified-Since 请求首部进行新鲜度检查



## 最佳实践
对于不需要缓存的资源可以设置如下响应标头
```
Cache-Control: max-age=0,must-revalidate,public
ETag: '内容hash'

表示当前文件可以被缓存服务器缓存，但是会立马过期，必须先通过网络对其进行新鲜度检查，然后才能再次使用
```
```
注意:
no-cache 等效于 max-age=0,must-revalidate。不过 no-cache 容易让人产生误解。
```

对于需要缓存的资源设置如下响应标头
```
Cache-Control: max-age=31536000,immutable,public

将资源缓存 1年
```


## Service worker
请求发起时优先访问 Service worker, 浏览器缓存，服务器


## 注意
1. 不设置`Cache-Control` 不代表浏览器不会缓存资源！浏览器会实际[猜测](https://www.mnot.net/blog/2017/03/16/browser-caching#heuristic-freshness)哪种类型的缓存行为对给定类型的内容最有意义


## 参考文章
- [web.dev 缓存介绍](https://web.dev/articles/http-cache?hl=zh-cn)
- [重新审视浏览器缓存的状态](https://www.mnot.net/blog/2017/03/16/browser-caching#heuristic-freshness)
