#  复制内容到剪贴板

## 兼容性
MDN 推荐使用 clipboard API，但是兼容性不高。
document.execCommand 虽然不推荐继续使用，但是兼容性高

## 实现
```javascript
function copyText(text) {
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text);
  } else {
    var textarea = document.createElement('textarea');
    document.body.appendChild(textarea);
    // 隐藏此输入框
    textarea.style.position = 'fixed';
    textarea.style.clip = 'rect(0 0 0 0)';
    textarea.style.top = '10px';
    textarea.value = text;
    // 选中
    textarea.select();
    document.execCommand('copy', true);
    document.body.removeChild(textarea);
  }
}
```

## clipboard.js
不仅有复制的实现，还有剪切等


## 参考地址
[张鑫旭](https://www.zhangxinxu.com/wordpress/2021/10/js-copy-paste-clipboard/)