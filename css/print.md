# CSS 打印样式

## @page

```css

@media print  {
  body {
    background-color: #fff;
  }
  .cus-container {
    padding: 0 40px;
  }
  .cus-project {
    break-inside: avoid;
  }
  @page {
    size: A4 portrait;
    padding: 50px 40px;
  }
}

```


A4 纸的物理尺寸
- 1 英寸等于 25.4 毫米（mm）。
- 宽度 × 高度：210 mm × 297 mm
- 英寸（in）：8.27 in × 11.69 in

当 DPI 为 96时A4纸对应的 CSS容器大小的计算方式
- 宽度：8.27 in × 96 px/in ≈ 794 px  
- 高度：11.69 in × 96 px/in ≈ 1123 px  

打印方面：DPI 是 Dot Per Inch 的缩写，意为 “每英寸点数”。
屏幕显示器：PPI 是 “Pixels Per Inch” 的缩写，意为 “每英寸像素数”


