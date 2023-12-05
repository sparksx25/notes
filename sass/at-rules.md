# At-rules

## @if
```scss
@debug if(true, 10px, 30px); // 10px
```

## @each
`@each... in ...` 可用来迭代列表和字典，同时允许解构列表与字典
```scss
// 定义列表，元素之间通过","区分
$icons:
  "eye" "\f112" 12px,
  "start" "\f12e" 16px,
  "stop" "\f12f" 10px;

// 定义字典
$map: ("primary": blue, "warning": red);

@each $name, $glyph, $size in $icons {
  #icon-#{$name} {
    content: $glyph;
    font-size: $size;
  }
}
```

## @for
```scss
$base-color: #036;
@for $i from 1 through 3 {
  ul:nth-child(3n + #{$i}) {
    background-color: lighten($base-color, $i * 5%);
  }
}
```

## @while
```scss
@while $value > $base {
  $value: math.div($value, $ratio);
}
```

## @function
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


## @root

## @debug

## @error

## @warn
