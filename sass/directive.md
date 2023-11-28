# SassScript 指令

## @each
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

## function
```scss
@use "sass:math";
$posterWidth: 1080PX;
$posterHeight: 1920PX;
$boxWidth: 216PX;
$boxHeight: 384PX;
$scale: calc($boxWidth / $posterWidth);

@function viewport($n) {
  $size: calc($n / $scale);
  $value: math.ceil($size);
  @return #{$value}PX;
}
```

## 指令列表
- @mixin
- @include
- @each
- @function
- @content
- @keyframes