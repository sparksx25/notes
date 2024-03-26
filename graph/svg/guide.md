# Guide

## Introduce
1. 可缩放矢量图形（Scalable Vector Graphics，SVG）基于 XML 标记语言，用于描述二维的矢量图形
2. 其他图像格式都是基于像素处理的，SVG 则是属于对图像的形状描述，所以它本质上是文本文件，体积较小，且不管放大多少倍都不会失真

## Features
- svg文件 可用于 css, 如作为背景, mask 等
- `img`,`embed`, `object`, `iframe` 标签可以加载 .svg 文件
- svg 标签支持添加类样式

## Concepts  
SVG 版本: 
1. 最接近的“完整版”SVG 版本是 1.1 版，SVG1.1 的第二个版本在 2011 年成为推荐标准，完整的 SVG1.2 本来是下一个标准版本，但它又被 SVG2.0 取代
2. SVG2.0 正在制定当中

SVG 命名空间: 
1. 命名空间对于支持多种 XML 方言的用户代理至关重要，每个 XML 方言都定义了其规范中描述的标记元素名称的含义
2. XML 内容通过为用户代理提供显式的“命名空间声明”来告诉用户代理元素名称属于哪种方言
3. 命名空间仅仅只是一些字符串，因为 URIs 的唯一性从而被广泛使用，它的本意并不是要“链接”到某个地址。
4. 默认情况下，参数根本没有命名空间


常用的命名空间有:
1. http://www.w3.org/1999/xhtml
2. http://www.w3.org/2000/svg
3. http://www.w3.org/1998/Math/MathML

XML:
1. 基于 XML 的拓展有 SVG, HTML

标准的 svg 命名空间:
- xmlns 属性定义了当前的 XML 标记表达的是 SVG
- xmlns:xlink 属性定义了如何处理标签上的 href 属性
```xml
<svg version="1.1"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    width="300" height="200"
    viewBox="0 0 100 100"
>
</svg>
```


## Shape
- line
- rect
- circle
- ellipse 
- polyline
- polygon