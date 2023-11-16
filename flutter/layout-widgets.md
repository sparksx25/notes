# layout widgets


## 创建文本
ParagraphBuilder： 是一个更高级的文本显示 Widget，它可以创建一个段落，其中包含多个文本块。
你可以使用 ParagraphBuilder 的方法来添加多个文本块，并对它们进行样式和布局的控制。
ParagraphBuilder 还可以处理文本的换行和段落间距等问题。

Text: 设置简单的文本


## Image
```dart
Image.network(
  'https://picsum.photos/250?image=9',
),
```

## TextButton

## MaterialPageRoute
根据实际运行平台来切换表现风格,在路由切换时，
如果是 Android 系统，它将会使用 Android 系统默认的页面切换动画(从底向上)；
如果是 iOS 系统，它会使用 iOS 系统默认的页面切换动画（从右向左）


-----------------------------------------------------------------------
## Scaffold 

## 设置盒子样式：Container
```dart
// 边框设置
BoxDecoration
Border
BorderSide
enum BorderStyle 
Borderradius

// 阴影
BoxShadow

Container(
  // 内容垂直居中布局
  alignment: Alignment.center,
  padding: const EdgeInsets.symmetric(vertical: 10),
  margin: const EdgeInsets.symmetric(vertical: 10, horizontal: 20),
  decoration: BoxDecoration(
    // 设置盒子的背景色
    color: const Color(0xFF999999), 
    // 设置背景图
    image: const DecorationImage(
      image: NetworkImage('https://flutter.github.io/assets-for-api-docs/assets/widgets/owl-2.jpg'),
      fit: BoxFit.cover,
    ),
    // 设置背景渐变
    gradient:
    // 设置边框
    border: Border.all(color: const Color(0xFF999999), style: BorderStyle.solid, width: 1),
    // 设置圆角
    borderRadius: const BorderRadius.all(Radius.circular(4)),
    shape: BoxShape.rectangle
    // 阴影
    boxShadow: BoxShadow()
  )
)
```

## BoxConstraints
BoxConstraints({ minWidth, maxWidth, minHeight, maxHeight})
BoxConstraints.tight(Size size)，它可以生成固定宽高的限制；
BoxConstraints.expand()可以生成一个尽可能大的用以填充另一个容器的BoxConstraints

## ConstrainedBox
```dart
ConstrainedBox(
  constraints: BoxConstraints,
  cihld:
);
```

## SizedBox
SizedBox用于给子元素指定固定的宽高

## Wrap

## Stack 层叠布局

## Positioned
根据 Stack 进行定位布局

## Align
调整子 Widget的对齐方式

## Alignment
相对定位布局

## ListView
```dart
ListView()
```

## Padding
## ViewPadding