# margin

## Feature
- 行内元素如 `<span>` 设置 margin-top, margin-bottom 无效。
- margin 值为 `percentage` 时，是相对于包含块的宽度，以百分比值为外边距
- 外边距折叠

## 外边距折叠
- 纵向存在重叠的外边距时，取较大的那个作为两个元素之间的外边距
- 如果父元素没有设置`padding-top`则第一个直接子元素的 `margin-top`,会与父元素的 `margin`值重叠
- 最后一个直接子元素的 `margin-bottom` 会与父元素的 `margin`值重叠，

## Reference
- [MDN: margin](https://developer.mozilla.org/zh-CN/docs/Web/CSS/margin)
- [MDN: 外边距折叠](https://developer.mozilla.org/zh-CN/docs/Web/CSS/CSS_box_model/Mastering_margin_collapsing)