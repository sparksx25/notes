# SassScript

## 参考地址
- [sass官网](https://sass-lang.com/documentation/style-rules/declarations/)

## 样式规则
### Interpolation 插值
```scss
@mixin prefix($property, $value, $prefixes) {
  @each $prefix in $prefixes {
    -#{$prefix}-#{$property}: $value;
  }
  #{$property}: $value;
}

.gray {
  @include prefix(filter, grayscale(50%), moz webkit);
}
```

### Nesting 嵌 套
```scss
.enlarge {
  font-size: 14px;
  transition: {
    property: font-size;
    duration: 4s;
    delay: 2s;
  }

  &:hover { font-size: 36px; }
}
```

### Hidden Declarations 隐藏声明
```scss
$rounded-corners: false;

.button {
  border: 1px solid black;
  border-radius: if($rounded-corners, 5px, null);
}
```

### Custom Properties 自定义属性
```scss
@use "sass:meta";
$primary: #81899b;
$font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto;
:root {
  --primary: #{$primary};
  // meta.inspect 保留引号
 --font-family-sans-serif: #{meta.inspect($font-family-sans-serif)};
}
```

## 变量
!default
!global
插值
