# 用户信息或功能授权

## 用户隐私政策
目的： 为了明确告诉用户，用户个人信息的处理目的和方式。只有**点击同意按钮**之后才能**成功调用**授权相关 API。
流程指引：自查，配置隐私政策，C端隐私授权交互

1. 自定义隐私政策展现形式
  - wx.onNeedPrivacyAuthorization：通过回调函数上报隐私授权结果
  - wx.getPrivacySetting：获取是否同意隐私授权，隐私政策协议名
  - wx.requirePrivacyAuthorize：触发 wx.onNeedPrivacyAuthorization 事件
  - wx.openPrivacyContract： 跳转到小程序生成的隐私协议内容界面


2. 使用默认的隐私政策弹窗


## wx.authorize
提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意**授权小程序使用某项功能**或获取用户的某些数据，但不会实际调用对应接口。
如果用户之前已经同意授权，则不会出现弹窗，直接返回成功

## wx.getSetting
获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限


## Reference
- [官方文档: 用户隐私保护](https://developers.weixin.qq.com/minigame/dev/guide/open-ability/privacy.html)