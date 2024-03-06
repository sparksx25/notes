# 用户信息或功能授权

## wx.authorize
提前向用户发起授权请求。调用后会立刻弹窗询问用户是否同意授权小程序使用**某项功能**或获取用户的某些数据，但不会实际调用对应接口。
如果用户之前已经同意授权，则不会出现弹窗，直接返回成功

## wx.getSetting
获取用户的当前设置。返回值中只会出现小程序已经向用户请求过的权限

## 用户隐私政策
目的： 为了明确告诉用户，用户个人信息的处理目的和方式

1. 自定义隐私政策展现形式
    wx.onNeedPrivacyAuthorization
    wx.getPrivacySetting
    wx.requirePrivacyAuthorize

2. 使用默认的隐私政策弹窗
