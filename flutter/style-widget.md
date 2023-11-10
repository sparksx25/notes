# 样式设置


## 文本设置
```dart
Text(title,
  maxLines: 1, // 最大行数
  overflow: TextOverflow.ellipsis,
  style: const TextStyle()
),
```

## 文本样式 TextStyle
```dart
const TextStyle(
    color: Color(0XFF333333),
    fontSize: 16,
    fontStyle: FontStyle.italic,
    fontWeight: FontWeight.bold | FontWeight,
)
```
FontWeight: normal | bold | w100-w900

FontStyle: normal | italic

Color: Color(0XFF333333),

TextDecoration: 文本装饰，如设置下划线，删除线等

TextAlign: left | right | center | ...


## 样式继承
DefaultTextStyle
```dart
DefaultTextStyle(
  child: Widget
)
```


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



