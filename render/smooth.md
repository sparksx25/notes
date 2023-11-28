# 如何让网页更加流畅

## 加载（Load）
如果不能在1秒钟内加载网页并让用户看到内容，用户的注意力就会分散。用户会觉得他要做的事情被打断，
如果10秒钟还打不开网页，用户会感到失望，会放弃他们想做的事，以后他们或许都不会再回来。

## 响应（Response）
100ms内对用户的输入操作进行响应，通常会被人类认为是立即响应。时间再长，操作与反应之间的连接就会中断，人们就会觉得它的操作有延迟

## 动画（Animation）
- 现如今大多数设备的屏幕刷新频率是60Hz，也就是每秒钟屏幕刷新60次；因此网页动画的运行速度只要达到60FPS，我们就会觉得动画很流畅。
- 但通常浏览器需要花费一些时间将每一帧的内容绘制到屏幕上（包括样式计算、布局、绘制、合成等工作），所以通常我们只有10毫秒来执行JS代码。

## requestAnimationFrame
requestAnimationFrame 可以防止丢帧，保持与屏幕刷新频率一致


## 空闲（Idle）
为了达到 100ms 内给出响应，将空闲周期执行的任务限制为 50ms 意味着，即使用户的输入行为发生在空闲任务刚开始执行，
浏览器仍有剩余的50ms时间用来响应用户输入，而不会产生用户可察觉的延迟。

requestIdleCallback 可用于请求在浏览器主线程空闲的时候执行任务

## 长任务
占用浏览器主线程超过 50ms 以上的任务就是长任务。长任务可以通过一下方法进行优化
1. Web Worker
2. Time Slicing(时间切片): 就是把一个长任务给切割成无数个执行时间很短的任务



## 强制同步布局
```javascript
var oDiv = document.querySelector('#id');
oDiv.style.left = '100';
// 强制立即执行一次布局。
void oDiv.offsetWidth;
oDiv.style.height = '200px'
```

## 布局抖动
```javascript
var lis = document.querySelector('li');
for (let i = 0; i < lis.length; i++) {
  lis[i].style.left = '100';
  void lis[i].offsetWidth;
}
```

## 使用CSS动画
CSS 动画不需要经过布局，绘制，只需要合成。

- 创建图层的最佳方式是使用 will-change，但某些不支持这个属性的浏览器可以使用3D 变形（transform: translateZ(0)）来强制创建一个新层。


## 参考文章
[知乎: 让你的网页更丝滑(一)](https://zhuanlan.zhihu.com/p/66398148)
[知乎: 让你的网页更丝滑-全](https://zhuanlan.zhihu.com/p/67728054)