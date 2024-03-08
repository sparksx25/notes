# TODO

- 文件下载 file-saver
- element-ui 上传组件
- 上传文件检验规则
- 整理 decimal 库
- 整理笔记
- 位操作
- aspect-ratio(已整理)
- xlsx.js
- vscode 插件(已整理)
- dcloud
- sort 排序的稳定性(已整理)
- word-wrap/word-break(已整理)
- 根据数组配置生成目录树
- npx 的用法(已整理)
- Bash
- git hooks
- git submodule
- 设计模式

- react, vue, solidjs, preact， svelte 的区别
- 前端组件库

- 微前端
- WebComponent
- https://learn.microsoft.com/zh-cn/windows-server/administration/windows-commands/clip

- 签名，加密，解密

- Web Worker， ffmpeg.js

线程与进程的区别：网页开发渲染线程和脚本线程是互斥的，这也是为什么长时间的脚本运行可能会导致页面失去响应，而在小程序中，二者是分开的，分别运行在不同的线程中

[进程与线程](https://zhuanlan.zhihu.com/p/441433148)


ts include .d.ts 声明文件


```js
function logger(text) {
  const logEl = document.querySelector('#logger')
  const spanEL =  document.createElement('DIV')
  spanEL.innerText = text
  logEl.appendChild(spanEL)
}
window.addEventListener('error',(err) => {
  logger(`message: ${err.message}`)
  logger(`filename: ${err.filename}`)
  logger(`lineno: ${err.lineno}`)
  logger(`colno: ${err.colno}`)
})
```
