# layout widgets


## 创建文本
ParagraphBuilder： 是一个更高级的文本显示 Widget，它可以创建一个段落，其中包含多个文本块。
你可以使用 ParagraphBuilder 的方法来添加多个文本块，并对它们进行样式和布局的控制。
ParagraphBuilder 还可以处理文本的换行和段落间距等问题。

Text: 设置简单的文本

## Container
```dart
Container(
  // 设置盒子的背景色, 与BoxDecoration.color 不能同时设置
  color:
  padding: const EdgeInsets.symmetric(vertical: 10),
  margin: const EdgeInsets.symmetric(vertical: 10, horizontal: 20),
  decoration: const BoxDecoration(
  decoration: BoxDecoration(
    color: const Color(0xFF999999), 
    border: Border.all(color: const Color(0xFF999999), style: BorderStyle.solid, width: 1),
    borderRadius: const BorderRadius.all(Radius.circular(4))
    shape: BoxShape.rectangle
  )
)
```

## SizedBox

## Image


## Row
弹性布局，主轴水平
```dart
Row(
  mainAxisAlignment: MainAxisAlignment.spaceBetween, 
  children: Widgets[]
)
```

## Column
弹性布局， 主轴纵向

## ListView
```dart
ListView()
```


## Padding
## ViewPadding