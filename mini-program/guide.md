# Guide

## 逻辑层与渲染层
其中 WXML 模板，WXSS 样式，WXS脚本 工作在渲染层，JS 脚本工作在逻辑层。小程序的渲染层和逻辑层分别由2个线程管理

一个小程序存在多个界面，所以渲染层存在多个WebView线程，这两个线程的通信会经由微信客户端（下文中也会采用Native来代指微信客户端）做中转，
逻辑层发送网络请求也经由Native转发，

## openId
用户在当前小程序的唯一标识（openid）、

## UnionID
微信开放平台账号下的唯一标识（unionid，若当前小程序已绑定到微信开放平台账号）

## 小程序版本
可通过 wx.getAccountInfoSync 接口获取
- develop	开发版
- trial	体验版
- release	正式版

## 优化
对于频繁触发的事件：使用 WXS 函数用来响应小程序事件，目前只能响应内置组件的事件，不支持自定义组件事件

## Reference
- [官方文档：小程序宿主环境](https://developers.weixin.qq.com/miniprogram/dev/framework/quickstart/framework.html)
- [官方文档: 用户隐私保护](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/privacy.html)
- [webkit,jscore](https://tech.meituan.com/2018/08/23/deep-understanding-of-jscore.html)