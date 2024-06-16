# 如何在项目中更好的引入数据模拟功能

`mockjs` 提供了生成随机数据，拦截 AJAX 请求的能力，这两个功能都给前端开发带来了很大的便利。

`mockjs` AJAX 请求拦截的能力是基于对 `XMLHTTPRequest` 重写来实现的。具体规则是对于不匹配的请求地址依旧使用原生的请求方式。对于匹配的请求地址进行拦截，然后根据设置的响应函数或响应模板生成随机数据并直接返回。所以并没有一个从浏览器发出请求，服务器接收请求并响应，浏览器接收响应的过程，即不能很好的还原开发场景。

为了能够更好的模拟一次完整的请求，可以将请求拦截与随机数生成放在本地服务完成。

## axios 源码
是在执行 open 方法之后在设置的 responseType 属性
```js
  // 摘自 axios 源码
  var XHR_RESPONSE_PROPERTIES = 'readyState responseURL status statusText responseType response responseText responseXML'.split(' ')

  request.open(config.method.toUpperCase(), buildURL(fullPath, config.params, config.

  // Add responseType to request if needed
  if (responseType && responseType !== 'json') {
    request.responseType = config.responseType;
  }

```

## mockjs XMLHTTPRequest.prototype.open 方法重写存在问题
没有在调用 send 方法之前正确的设置原生 XMLHTTPRequest 实例的 responseType 属性，所以存在下载二进制文件时，文件格式不能正确识别而打开报错。
```js
// 摘自 mockjs 源码
	var XHR_EVENTS = 'readystatechange loadstart progress abort error load timeout loadend'.split(' ')
	var XHR_REQUEST_PROPERTIES = 'timeout withCredentials'.split(' ')
	var XHR_RESPONSE_PROPERTIES = 'readyState responseURL status statusText responseType response responseText responseXML'.split(' ')
  Util.extend(MockXMLHttpRequest.prototype, {
    open: function(method, url, async, username, password) {
      var that = this

      Util.extend(this.custom, {
          method: method,
          url: url,
          async: typeof async === 'boolean' ? async : true,
          username: username,
          password: password,
          options: {
              url: url,
              type: method
          }
      })

      this.custom.timeout = function(timeout) {
          if (typeof timeout === 'number') return timeout
          if (typeof timeout === 'string' && !~timeout.indexOf('-')) return parseInt(timeout, 10)
          if (typeof timeout === 'string' && ~timeout.indexOf('-')) {
              var tmp = timeout.split('-')
              var min = parseInt(tmp[0], 10)
              var max = parseInt(tmp[1], 10)
              return Math.round(Math.random() * (max - min)) + min
          }
      }(MockXMLHttpRequest._settings.timeout)

      // 查找与请求参数匹配的数据模板
      var item = find(this.custom.options)

      function handle(event) {
          // 同步属性 NativeXMLHttpRequest => MockXMLHttpRequest
          for (var i = 0; i < XHR_RESPONSE_PROPERTIES.length; i++) {
              try {
                  that[XHR_RESPONSE_PROPERTIES[i]] = xhr[XHR_RESPONSE_PROPERTIES[i]]
              } catch (e) {}
          }
          // 触发 MockXMLHttpRequest 上的同名事件
          that.dispatchEvent(new Event(event.type /*, false, false, that*/ ))
      }

      // 如果未找到匹配的数据模板，则采用原生 XHR 发送请求。
      if (!item) {
          // 创建原生 XHR 对象，调用原生 open()，监听所有原生事件
          var xhr = createNativeXMLHttpRequest()
          this.custom.xhr = xhr

          // 初始化所有事件，用于监听原生 XHR 对象的事件
          for (var i = 0; i < XHR_EVENTS.length; i++) {
              xhr.addEventListener(XHR_EVENTS[i], handle)
          }

          // xhr.open()
          if (username) xhr.open(method, url, async, username, password)
          else xhr.open(method, url, async)

          // 同步属性 MockXMLHttpRequest => NativeXMLHttpRequest
          for (var j = 0; j < XHR_REQUEST_PROPERTIES.length; j++) {
              try {
                  xhr[XHR_REQUEST_PROPERTIES[j]] = that[XHR_REQUEST_PROPERTIES[j]]
              } catch (e) {}
          }

          return
      }

      // 找到了匹配的数据模板，开始拦截 XHR 请求
      this.match = true
      this.custom.template = item
      this.readyState = MockXMLHttpRequest.OPENED
      this.dispatchEvent(new Event('readystatechange' /*, false, false, this*/ ))
  },
  send: function send(data) {
      var that = this
      this.custom.options.body = data

      // 原生 XHR
      if (!this.match) {
        this.custom.xhr.send(data)
        return
      }
  }
})


修复方法
send() {
  var that = this
  this.custom.options.body = data

  // 原生 XHR
  if (!this.match) {
    // 应该在此正确设置 原生xhr实例属性
    for (var j = 0; j < XHR_REQUEST_PROPERTIES.length; j++) {
      try {
          xhr[XHR_REQUEST_PROPERTIES[j]] = that[XHR_REQUEST_PROPERTIES[j]]
      } catch (e) {}
    }
    this.custom.xhr.responseType = this.responseType

    this.custom.xhr.send(data)
    return
  }
}
```



## Mockjs AJAX 的实现
> 以下代码摘自 Mockjs 源码
```js
Mock.mock = function(rurl, rtype, template) {
    // Mock.mock(template)
    if (arguments.length === 1) {
        return Handler.gen(rurl)
    }
    // Mock.mock(rurl, template)
    if (arguments.length === 2) {
        template = rtype
        rtype = undefined
    }
    // 拦截 XHR
    if (XHR) window.XMLHttpRequest = XHR
    Mock._mocked[rurl + (rtype || '')] = {
        rurl: rurl,
        rtype: rtype,
        template: template
    }
    return Mock
}
```


## vite 中集成 mockjs
`vite-plugin-mock` 是基于 Vite 的一个开发插件，旨在通过本地服务端代理请求，并根据配置的请求模板生成随机数据并返回。

1. 安装插件
   `npm i vite-plugin-mock mockjs -D`

2. 配置插件
vite.config.ts
```js
import { viteMockServe } from 'vite-plugin-mock'
const viteConfig = defineConfig((mode: ConfigEnv) => {
	const env = loadEnv(mode.mode, process.cwd());
	return {
		plugins: [
			vue(),
			viteMockServe({
        // 配置本地随机数模板文件夹
        mockPath: 'mock',
        enable: true,
      }),
		],
	};
});

export default viteConfig;
```

3. 配置随机数生成模板
/mock/role.js
```js
export default [
  {
    url: '/api/admin/role/page',
    method: 'get',
    response({query, body, params}) {
      const pageSize = query.size || 10;
      return {
        "code": 0,
        "msg": null,
        data: {
          "total|100-500": 500,
          "size": 10,
          "current": query.current,
          "pages|1-10": 100,
          [`records|${pageSize}`]: [
            {
              "roleId": "@id",
              "roleName": "@cname",
              "roleCode": "@word(5, 10)",
              "roleDesc": "@ctitle",
              "dsType": 0,
              "dsScope": null,
              "createBy": "@word(5, 10)",
              "updateBy": " ",
              "createTime": "2024-05-10 16:47:34",
              "updateTime": null,
              "delFlag": "0"
            }
          ] 
        }
      }
    }
  }
]
```
