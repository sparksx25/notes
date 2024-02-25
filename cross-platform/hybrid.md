# Hybrid(混合开发)

## 前言
混合开发按照渲染可分为下类：
- Web渲染的混合App（Codova、Ionic）
- 原生渲染的混合App（ReactNative、Weex）
- 小程序

混合开发使用 WebView 组件承载应用页面，并通过 JSBridge 提供原生功能。


## Native 调用 Web 方法
JavaScript作为解释性语言，最大的一个特性就是可以随时随地地通过解释器执行一段JS代码，所以可以将拼接的JavaScript代码字符串，传入JS解析器执行就可以，JS解析器在这里就是webView。Native 可以通过回调接收调用结果

```swift
String jsCode = String.format("window.showWebDialog('%s')", text);
webView.evaluateJavascript(jsCode, new ValueCallback<String>() {
  @Override
  public void onReceiveValue(String value) {

  }
});
```

备注：除了直接调用 JS方法，还可通过 document 事件与 Web 通信，阿里的 mpass 就是通过事件调用 web 方法。

## Web 调用 Native
实现方式： 1.拦截Webview请求的URL Schema  2.向Webview中注入JS API

### URL Scheme
实现特点：通过拦截Webview 请求的URL

缺点：
- 平台差异：不同平台对于 URL Scheme 的支持程度和使用方式存在差异
- 功能限制：url 存在字符长度限制
- 性能损耗：建立请求有时间耗时

### JS API 注入
实现特点：通过webView提供的接口，App将Native的相关接口注入到JS的Context（window）的对象中，一般来说这个对象内的方法名与Native相关方法名是相同的，Web端就可以直接在全局window下使用这个暴露的全局JS对象，进而调用原生端的方法

```js
  let id = 1;
  const callbackMap = {};
  window.JSSDK = {
    wxpay(params, callback) {
      const callbackId = id++;
      callbackMap[callbackId] = callback;
      window.NativeBridge.wxpay(callbackId);
    },
    receiveMessage(callbackId, value) {
      if (callbackMap[callbackId]) {
        callbackMap[callbackId](value);
      }
    }
  };

  window.JSSDK.wxpay(value => window.alert('支付成功'));
```

## Reference
- [掘金：深入浅出JSBridge：从原理到使用](https://juejin.cn/post/6936814903021797389)