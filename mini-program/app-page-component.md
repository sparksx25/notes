# Component

```ts
App({
  onLaunch (options) {},
  onShow (options) {},
  onHide () {},
  onError (msg) {},
  onPageNotFound() {},
  onUnhandledRejection(){},
  onThemeChange(){},
  globalData: 'I am global data'
})

Page({
  data: {
    text: "This is page data."
  },
  onLoad: function(options) {
  },
  onShow: function() {
  },
  onReady: function() {
  },
  onHide: function() {
  },
  onUnload: function() {
  },
  onPullDownRefresh: function() {
  },
  onReachBottom: function() {
  },
  onPageScroll: function() {
  },
  onResize: function() {
  },
  onShareAppMessage: function () {
  },
  onTabItemTap(){},
})

Page.prototype = {
  route: '到当前页面的路径',
  setData(Object data, Function callback){}
}

Component({
  // mixin
  behaviors: [],

  // 属性定义（详情参见下文）
  properties: {
    myProperty: { // 属性名
      type: String,
      value: ''
    },
    myProperty2: String // 简化的定义方式
  },

  options

  externalClasses: [] // 组件接受的外部样式类

  data: {}, // 私有数据，可用于模板渲染

  lifetimes: {
    // 生命周期函数，可以为函数，或一个在methods段中定义的方法名
    attached: function () { },
    detached: function () { },
    ready: function() { },
    moved: function () { },
  },
  // 这个位置声明的声明周期会被 lifetimes 覆盖
  attached: function () { }, 
  ready: function() { },

  pageLifetimes: {
    show: function () { },
    hide: function () { },
    resize: function () { },
  },

  methods: {
  }

})
```

