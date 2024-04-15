# Guide

## Introduce
1. 可缩放矢量图形（Scalable Vector Graphics，SVG）基于 XML 标记语言，用于描述二维的矢量图形
2. 其他图像格式都是基于像素处理的，SVG 则是属于对图像的形状描述，所以它本质上是文本文件，体积较小，且不管放大多少倍都不会失真

## Features
- svg文件 可用于 css, 如作为背景图, mask 等
- `img`,`embed`, `object`, `iframe` 标签可以加载 .svg 文件
- svg 标签支持添加类样式
- 可通过操作 DOM 的方式操作 SVG 节点 
- svg 节点支持 css 样式

## Concepts  
**SVG 版本**: 
1. 最接近的“完整版”SVG 版本是 1.1 版，SVG1.1 的第二个版本在 2011 年成为推荐标准，完整的 SVG1.2 本来是下一个标准版本，但它又被 SVG2.0 取代
2. SVG2.0 正在制定当中

**SVG 命名空间**:    
- 通过脚本创建 SVG 元素时，若不指定命名空间，浏览器将不知道以何种形式表达该元素   
- 命名空间的目的为了告诉用户代理如何区分基于 XML 的不同类型的内容，同一文档中相同的标签在不同的标记语言中所表达的含义不用。
- 命名空间是一种机制，用于给 XML 元素和属性加上前缀，以便于识别不同来源的 XML 数据。在 SVG 中，命名空间的目的是确保不同 XML 元素和属性之间的唯一性，**避免冲突和混淆**。
- 命名空间对于支持多种 XML 方言的用户代理至关重要，每个 XML 方言都定义了其规范中**描述的标记元素名称的含义**
- XML 内容通过为用户代理提供显式的“命名空间声明”来告诉用户代理元素名称**属于哪种方言**
- 命名空间仅仅只是一些字符串，因为 URIs 的唯一性从而被广泛使用，它的本意并不是要“链接”到某个地址。


**常用的命名空间有**:
1. http://www.w3.org/1999/xhtml
2. http://www.w3.org/2000/svg
3. http://www.w3.org/1998/Math/MathML

**XML**:
1. 基于 XML 的拓展有 SVG, HTML

**标准的 svg 命名空间**:
- xmlns 属性定义了当前的 XML 标记指的是 SVG
- xmlns:xlink 属性定义了如何处理标签上的 href 属性
- svg2 已弃用 version 属性
```xml
<svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="300" height="200"
    viewBox="0 0 100 100"
>
</svg>
```


## Shapes
- line: M,L,Z
- rect
- circle
- ellipse 
- polyline
- polygon

## 元素
- defs:
  SVG 允许我们定义以后需要重复使用的图形元素，defs 元素里面的内容 支持任意数量、任意顺序的某些元素

- g
  元素g是用来组合对象的容器。添加到g元素上的变换会应用到其所有的子元素上。添加到g元素的属性会被其所有的子元素继承。此外，g元素也可以用来定义复杂的对象，之后可以通过<use>元素来引用它们

- use
  它的效果等同于这些节点被深克隆到一个不可见的 DOM 中。隐藏的、克隆的 DOM 不能保证继承 CSS 属性
  ```html
    <use x="50" y="50" xlink:href="#Port" style="fill:blue"/>
  ```

- foreignObject
  `<foreignObject>` 元素允许包含来自不同的 XML 命名空间的元素。在浏览器的上下文中，很可能是 XHTML / HTML

- `def`
  主要用于定义单个的图形元素或渐变、滤镜等

- symbol
  1. 则主要用于定义一组图形元素，通常作为一个完整的图标或符号来使用
  2. symbol 元素用来定义一个图形模板对象，它可以用一个`<use>`元素实例化

## 属性
- viewBox
  -[viewBox属性解读](https://developer.mozilla.org/zh-CN/docs/Web/SVG/Tutorial/Positions)
