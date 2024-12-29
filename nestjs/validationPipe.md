# ValidationPipe 

使用 `@nestjs/common` 提供的 `ValidationPipe` 类进行接口数据校验，
`ValidationPipe` 管道使用 `class-validator` `class-transformer` 类库。


## features
1. 启用 `{transform: true }` 配置支持根据 DTO 配置将请求对象转成类对象，同时支持将 Param 参数按照 TS 转换。
    - 目前存在无法对对象进行隐式转换的问题，需要手动进行转换

```ts

```
