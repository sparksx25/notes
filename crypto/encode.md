# 编码
encode,
decode

## URL编码
URL编码是对**字符**进行编码。
之所以需要URL编码，是因为出于兼容性考虑，很多服务器只识别ASCII字符。
URL编码是浏览器发送数据给服务器时使用的编码，它通常附加在URL的参数部分。

URL编码规则:
1. 如果是 `A-Z a-z 0-9 - _ . ! ~ * ' ( )`, 则保持不变
2. 如果是其他字符，先转换为UTF-8编码，然后对每个字节以%XX表示

js 中的API:
1. encodeURI: 保留字符较多，特别是不对 `/ & = + #` 字符进行编码
2. encodeURIComponent: 相比于 encodeURI, 会编码更多的字符，以下字符都不转义`A-Z a-z 0-9 - _ . ! ~ * ' ( )`

- [encodeURIComponent](https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/encodeURIComponent)


## Base64编码
Base64编码可以把任意长度的**二进制数据**变为纯文本，且只包含`A~Z a~z 0~9 + / =`这些字符，但编码后数据量会增加1/3。

- [廖雪峰: Base64编码](https://www.liaoxuefeng.com/wiki/1252599548343744/1304227703947297)
