# HTTP

## 非持续连接与持续连接
HTTP 既能够使用非持续连接，也能够使用持续连接。尽管HTTP在其默认方式下使用持
续连接，HTTP客户和服务器也能配置成使用非持续连接

- HTTP/1.0 是非持续连接, HTTP/1.1 支持持续链接
- 服务器可设置 `Connection: close` 响应首部字段设置当前连接为非持续连接

## HTTP 缓存
- Last-Modified 与 If-Modified-Since

## DASH
经HTTP的动态适应性流(Dynamic Adaptive Streaming over HTTP, DASH)。
视频编码为几个不同的版本，其中每个版本具有不同的比特率，对应于不同的质量水平。
客户动态地请求来自不同版本且长度为几秒的视频段数据块。当可用带宽量较高时，客户自然地选择来自高速率版本的块；
当可用带宽量较低时，客户自然地选择来自低速率版本的块。客户用HTTP GET请求报文一次选择—个不同的块