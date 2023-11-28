# IOS html 兼容问题

## 输入数字
input 标签, type="number"时，并不能限制键盘只能输入数字, 需要加上 pattern 属性

```html
<input type="number" pattern="[0-9]*">
```

[MDN: input](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Global_attributes/inputmode)


## 限制输入字节数
input 标签, maxlength="3", 可以输入两个字母加一个表情(大于2个字节的表情)

以下知识点组合可实现自定义输入限制

1. `input, compositionstart, compositionend` 事件触发顺序，先触发`compositionstart`，再触发1次或多次`input`事件，再触发 `compositionend`

2. `HTMLInputElement.dispatchEvent(new Event('input'))`

3. 字符计数与分离
```js
const str = 'ab🙂';
console.log(str.length) // 4
console.log([...str].length) // 3
```
具体实现可参考 `vant` 组件库 `Field` 组件



## user-select
设置了 `user-select: none;` 的输入框(`input, textarea`), 点击输入框会首先获取焦点，然后立马失去焦点


## textarea
1. `textarea` 输入框的高度不随文本内容长度的变化而变化，需要通过脚本动态设置, 
`HTMLTextareaElement.scrollHeight` 可以获取内部滚动的高度

2. IOS 在输入框获取焦点的时候会修改`body.scrollTop`值, 动态设置了高度之后，为了还原原来的位置需要修改
`body.scrollTop`的值

具体实现可参考 `vant` 组件库 `Field` 组件


## fixed 定位
使用 fixed 定位固定在页面底部的按钮，输入框获取焦点时，整个 WebView 容器会往上推。
[掘金](https://juejin.cn/post/6961757804491178014)