# Quote

## 插值中的引号
`#${}` 插值中的引号会自动去除
```scss
@mixin unquote($name) {
  content: #{$name};
}
.user($name) {
  @include unquote("mail")
}

// compressed
.user {
  content: mail;
}
```

## string.unquote() 
该方法可去除引号