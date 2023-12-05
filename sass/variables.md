# Variables

## !default 变量的默认值, 
```scss
// library.scss
$black: #000 !default;
$border-radius: 0.25rem !default;
$box-shadow: 0 0.5rem 1rem rgba($black, 0.15) !default;

code {
  border-radius: $border-radius; // 0.1rem
  box-shadow: $box-shadow; // 0 0.5rem 1rem rgba($black, 0.15)
}
```
```scss
@use 'library' with (
  $black: #222,
  $border-radius: 0.1rem
);
```

## !globa 设置全局变量
该 !global 标志只能用于设置**已在**文件顶层声明的变量，它不能用于声明新变量, 修改了全局变量的值。
```scss
$variable: red;
.content {
  $variable: blue !global;
  color: $variable;
}
```


## 变量的作用域
- 当外部作用域中声明的变量与局部作用域声明的变量名相同时，他们代表同一个变量。
- 变量有块级作用域，局部作用域声明的变量，外部作用域不可访问


## 模块中的私有变量
模块中的私有变量以 `$-`,`$_`开头命名