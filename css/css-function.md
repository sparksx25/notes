# CSS function

calc()
var()
env()
const()
url()
rgb()
rgba()
linear-gradient()
radial-gradient()
clamp(MIN, VAL, MAX)
min()
max()

fit-content()
minmax()

attr():
 attr() 理论上能用于所有的 CSS 属性但目前支持的仅有伪元素的 content 属性，其他的属性和高级特性目前是实验性的。
 使用方法 attr(元素属性名)

  

## grid 相关
fit-content()
minmax()


## attr()
> attr() 理论上能用于所有的 CSS 属性但目前支持的仅有伪元素的 content 属性，其他的属性和高级特性目前是实验性的。

语法: `attr( attribute-name <type-or-unit>? [, <fallback> ]? )`

1. attr 目前只支持 CSS 的 content属性，支持性较高
2. attr 不支持设置属性类型，回滚值


## Reference
- [CSS函数](https://developer.mozilla.org/en-US/docs/Web/CSS/env)
