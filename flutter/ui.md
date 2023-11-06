# base基础开发
## 字体设置
FontWeight: normal | bold | w100-w900

FontStyle: normal | italic

Color: 设置颜色

TextDecoration: 文本装饰，如设置下划线，删除线等

TextAlign: left | right | center

TextStyle: 设置文本样式，如字体大小，粗细，是否倾斜等

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

## 边框
边框大小，边框样式，边框颜色 
Border
BorderSide
BoxDecoration

## 圆角

## 阴影
BoxShadow


## 创建文本
ParagraphBuilder： 是一个更高级的文本显示 Widget，它可以创建一个段落，其中包含多个文本块。
你可以使用 ParagraphBuilder 的方法来添加多个文本块，并对它们进行样式和布局的控制。
ParagraphBuilder 还可以处理文本的换行和段落间距等问题。

Text: 设置简单的文本

## 表单
Form
FormField

TextBox： 文本输入框
EditableText： 基础文本输入框


## 基本布局 Widgets
Container: 可设置 `margin`, `padding`, `border`

Image： 图片

Padding: 设置内边距
ViewPadding：设置内边距

Row: 弹性布局

Column: 弹性布局

List：列表


## 时间监听
GestureDetector
