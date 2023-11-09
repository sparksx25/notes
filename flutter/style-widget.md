# base基础开发
## 字体设置
FontWeight: normal | bold | w100-w900

FontStyle: normal | italic

Color: 设置颜色

TextDecoration: 文本装饰，如设置下划线，删除线等

TextAlign: left | right | center | ...

TextStyle: 设置文本样式，如字体大小，粗细，是否倾斜等
```dart
TextStyle(
  fontWeight:
  fontSize:
  fontStyle:
  color:
)
```

DefaultTextStyle: 样式继承


## 容器大小设置
BoxConstraints: 设置最大，最小值


## 内边距
1. 使用 `Padding widgets`:
```dart
Padding(
  padding: const EdgInsets.symmetric(vertical: 20, horizontal: 20),
  child: Widget
)
```
2. 自带`padding` 属性的 `Widgets`, 如 `Container`


## 外边距
1. 自带`margin` 属性的 `Widgets`, 如 `Container`



## 事件监听
GestureDetector

```dart
GestureDetector(
  // 点击事件
  onTap: 
  onDoubleTap: 
  onLongPress:
  onScaleStart:
  onScaleEnd:
  onScaleUpdate: ,
)
```
