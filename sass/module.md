# SassScript Module
## "sass:map"
```scss
@use "sass:map";

$theme-colors: (
  "success": #28a745,
  "info": #17a2b8,
  "warning": #ffc107,
);

.alert {
  // Instead of $theme-color-#{warning}
  background-color: map.get($theme-colors, "warning");
}
```

## 函数
```scss
.gray {
    $string: "#ccc";
    // 去除引号
    color: string.unquote($string);
}
```