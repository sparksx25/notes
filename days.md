## 正则
```js
var tel = '15033756367'
function escapeTel(tel) {
    return tel.replace(/^(\d{3})\d*(\d{4})$/, '$1****$2')
}
console.log(escapeTel(tel))
```

## 虚拟滚动
[博客-虚拟滚动](https://youthfighter.github.io/react-virtual-list/transform.html)


## .editorconfig 文件配置
[官网: editorconfig](https://editorconfig.org/)


## 贝塞尔曲线
[控制点对曲线的影响](http://blogs.sitepointstatic.com/examples/tech/canvas-curves/bezier-curve.html)
[贝塞尔曲线拟合](https://www.jianshu.com/p/b5e141080e79)
[贝塞尔曲线控制点的计算](https://wenku.baidu.com/view/c790f8d46bec0975f565e211.html?_wkts_=1685509147505)
[Animated Bézier Curves](https://www.jasondavies.com/animated-bezier/)
[沿曲线运动的彗星拖尾效果实现DEMO](https://www.freesion.com/article/9044518986/)


## 对象校验
1. webpack 使用 Ajx, Ajx-keywords 对配置对象进行校验
[Ajv JSON schema validator](https://www.npmjs.com/package/ajv)
[Custom JSON-Schema keywords for Ajv validator](https://www.npmjs.com/package/ajv-keywords)

2. element-ui 使用 async-validator
[async-validator](https://www.npmjs.com/package/async-validator)



## 流的使用
[流的相关概念](https://web.dev/streams/)
[MDN: Stream API 概念](https://developer.mozilla.org/zh-CN/docs/Web/API/Streams_API/Concepts)


## HTML API

### 中止器
AbortSignal: 中止信号

AbortController 中止控制器


### 文本的编码与解码
TextDecoder: 文本解码器

TextDecoderStream: 文本解码转换流

TextEncoder：文本编码器

TextEncoderStream：文本编码转换流


### 缓存
ArrayBuffer： 创建制定字节长度的缓存区

### 类型化数组
Unit8Array


## Web 流操作
WriteableStream

ReadableStream

TransformStream

CountQueuingStrategy: 以 Chunk 数量作为排队策略

ByteLengthQueuingStrategy：以队列中所有 Chunk 的字节总数作为排队策略


## Nodejs Stream

### 四种类型的流： Writable, Readable, Duplex, Transform

### Chunk 的类型： 
ObjectMode: false
    支持 string，Buffer, Unit8Array 类型， chunk 会被添加到内部缓存区

ObjectMode: true
    支持任意类型，chunk添加到内存区（待确定）

### Readable 
可读类型的流有2种读取模式
1. 流动模式读取。监听 'data' 事件/调用 resume() 方法/调用 pipe()方法，都会将流换到流动模式，此时流内部会自动调用 read 方法读取内部队列中的chunk
2. 暂停模式，需要手动调用 read 方法



## nodejs-commonjs模块
### 模块支持
NodeJS 支持Commonjs模块也支持 ESM 模块。可通过文件后缀 .mjs, .cjs, package.json 中的 type: commonjs|module 区分

### commonjs模块循环加载
require 循环加载模块时，模块在返回时可能尚未完成执行

### 模块查找
优先根据 路径前导 '/'、'./' 或 '../' 来指示文件，接着判断是否是核心模块，接着按 node_modules 层级进行查看


### commonjs
require.cahce 与 module.builtinModules 获取模块缓存
require.resolve  获取调用 require() 时将加载的确切文件名

[nodejs 官网](http://www.nodejs.com.cn/api/modules.html)


## nodejs-ECMAScript 模块
nodejs 中使用 ECMA 语法。  可通过以下俩种方法
1. 以.mjs 后缀的文件认为是 ESM 模块
2. 父 packages.json 中声明 type: "module"


## WebGL
https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-fundamentals.html



## Web API
```javascript
// 页面卸载时向服务器发送 post 请求
navigator.sendBeacon(url, data)

// 获取系统的剪贴板
navigator.clipboard.readText().then()

// 获取麦克风或摄像头流数据
navigator.mediaDevices.getUserMedia()

// 获取录屏流
navigator.mediaDevices.getDiaplayMedia()

// 同源情况下：多窗口，tab页面, iframe 通信 
new  BroadcastChannel(channelName)

// 获取系统提供的拾色器
const eyeDropper = new EyeDropper();

// 利用系统空闲时间执行任务
requestIdleCallback(), cancelIdleCallback()

// 监测某个元素是否可见
new IntersectionObserver()

```