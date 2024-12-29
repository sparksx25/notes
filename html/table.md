# Table

## 基础结构
```html
  <table>
    <caption>Annual surface temperature change in 2022</caption>
    <thead>
      <tr>
        <th scope="column">Country</th>
        <th scope="column">Mean temperature change (°C)</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <th scope="row">United Kingdom</th>
        <td>1.912</td>
      </tr>
    </tbody>
    <tfoot>
      <tr>
        <th scope="row">United Kingdom</th>
        <td>1.912</td>
      </tr>
    </tfoot>
```

## table
通过 `border-collapse` 样式设置表格中单元格的边框之间是否折叠。
  1. `border-collapse: collapse` 表示单元格的边框互相折叠。
  2. `border-collapse: separate` 表示单元格的边框相互分离，可以通过 `border-spacing: length` 设置单元格之间间距的大小

通过 `table-layout` 样式设置表格布局算法
  1. `table-layout: fixed ` 使用在第一个表格行的列或单元格上定义的宽度来解析列宽，不由内容宽度决定

通过 `caption-side` 样式设置表头布局位置
  1. `caption-side: bottom` 设置表格头部的布局位置

## caption 元素
caption 元素必须作为 table 元素的第一个直接子元素

## tr 元素
tr 元素设置 border 属性无效。

## scope 属性
提供一种辅助解释功能，主要作用于 th, td 元素表明该元素是作为表格的内容行，还是作为表格标题的列来使用。


## Reference
- [博客: 以现代 CSS 方式设置表格的样式](https://piccalil.li/blog/styling-tables-the-modern-css-way/)