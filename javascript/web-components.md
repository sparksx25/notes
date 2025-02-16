# Web-components
浏览器原生支持的自定义元素技术，自定义元素独立与 JS 框架无关。可与任何 JS 框架集成，如 Vue, React。


## Table of content
1. 影子宿主 shadow host
2. 影子根 shadow root
3. 影子树 shadow tree
4. 影子边界 shadow boundary
5. 自定义元素
6. 事件冒泡，事件源
7. 模板，插槽


## 自定义元素
- 内置自定义元素（继承自标准的 HTML 元素），如继承自 HTMLUListElement, HTMLImageElement 类。通过内置标签的 is 属性区分自定义元素类型。
  
- 独立自定义元素（创建新的标签），继承自 HTMLElement 类。

自定义元素包含:
- 生命周期 connectedCallback，disconnectedCallback，adoptedCallback， attributeChangedCallback
- 属性删除/更改/添加监听（static observedAttributes = ['name', 'email']
- 自定义事件通知


## 影子DOM
- 影子宿主(shadow.host)
- 影子树
- 影子根(Element.shadowRoot)

1. 影子 DOM 树内部对于在页面中运行的 JavaScript 和 CSS 是隐藏。即无法通过 DOM API 访问影子 DOM，全局样式对影子 DOM 不生效
   
2. 使用 `{mode: "open"} `参数为页面提供一种破坏影子 DOM 封装的方法。如果你不希望给页面这个能力，传递` {mode: "closed"}` 作为替代，此时 `Element.shadowRoot` 返回 null
   
3. `:host` 伪类生效

4. DOM 元素成为 shadow host 之后，其原本的子元素不在页面上显示，显示的是 shadow tree

样式应用:
- 编程式，通过构建一个 CSSStyleSheet 对象并将其附加到影子根。
- 声明式，通过在一个 `<template>` 元素的声明中添加一个` <style>` 元素。

事件冒泡:
- 影子树中触发的事件想要冒泡到影子树的外面，需要通过 shadow.host 方法触发事件

## 模板和插槽
template 和 slot 元素


## FAQ
1. 如何在影子 DOM 中使用全局样式
  使用 `::part()`伪元素, `:host-context(body.dark-mode)`伪类在全局为为自定义元素设置样式

2. 影子 DOM 如何触发父组件绑定的自定义事件
   调用通过影子宿主(shadow.host)的 dispatchEvent 方法，触发自定义事件冒泡

3. React
  shadow DOM 中触发的事件，事件源(event.target)指向的是 shadow host, 而不是触发事件的 shadow DOM。
  由于事件源指向不同，react 使用合成事件机制的原因，导致在 React中 shadow DOM 内触发的事件，在外部不会触发。（react17.0以后修复了这个问题，将事件的代理对象由 document 改为了 app 的根节点）

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <div id="app">
        <h1>app</h1>
    </div>
    <script>
        // 1. app 元素成为 shadow host 之后，其原本的子元素不在页面上显示，显示的是 shadow tree
        // 2. shadow DOM 中触发的事件，事件源指向的是 shadow host, 而不是触发事件的 shadow DOM。
        // 3. 由于 react 合成事件机制的原因，导致 shadow DOM 内触发的事件，在外部不会触发。
        // （react17.0以后修复了这个问题，将事件的代理对象由 document 改为了 app 的根节点）
        // 参考网址: https://michaeljier.cn/blog/shadow-dom
        const app = document.querySelector('#app');
        const shadowRoot = app.attachShadow({'mode': "open"});

        const button = document.createElement('button')
        button.textContent = 'inner Click';
        button.onclick = function(event) {
            // event.target -> app
            console.log(event)
        }
        shadowRoot.appendChild(button);

        document.body.addEventListener('click', (event) => {
            // event.target -> app
            console.log(event)
        })
    </script>
</body>
</html>
```


## example
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <body>
    <style>
      .name {
        color: red !important;
      }
      user-card::part(name) {
        color: red;
      }
    </style>
    <template id="userCardTemplate">
      <style>
        :host {
          display: flex;
          align-items: center;
          width: 450px;
          height: 180px;
          background-color: #d4d4d4;
          border: 1px solid #d5d5d5;
          box-shadow: 1px 1px 5px rgba(0, 0, 0, 0.1);
          border-radius: 3px;
          overflow: hidden;
          padding: 10px;
          box-sizing: border-box;
          font-family: 'Poppins', sans-serif;
        }
        .image {
          flex: 0 0 auto;
          width: 160px;
          height: 160px;
          vertical-align: middle;
          border-radius: 5px;
        }
        .container {
          box-sizing: border-box;
          padding: 20px;
          height: 160px;
        }
        .container > .name {
          font-size: 20px;
          font-weight: 600;
          line-height: 1;
          margin: 0;
          margin-bottom: 5px;
        }
        .container > .email {
          font-size: 12px;
          opacity: 0.75;
          line-height: 1;
          margin: 0;
          margin-bottom: 15px;
        }
        .container > .button {
          padding: 10px 25px;
          font-size: 12px;
          border-radius: 5px;
          text-transform: uppercase;
        }
      </style>

      <img src="https://semantic-ui.com/images/avatar2/large/kristy.png" class="image" />
      <div class="container">
        <p class="name" part="name">User Name</p>
        <p class="email">yourmail@some-email.com</p>
        <button class="button">Follow</button>
      </div>
    </template>
    <div class="app">
      <user-card ></user-card>
    </div>
    <script>
      const app = document.querySelector('.app')
      document.addEventListener('follow', (event) => {
      }, { capture: true})

      class UserCard extends HTMLElement {
        static observedAttributes = ['name', 'email'];
        constructor() {
          super();
          const shadow = this.attachShadow({ mode: 'closed' });
          var templateElem = document.getElementById('userCardTemplate');
          var content = templateElem.content.cloneNode(true);
          shadow.appendChild(content);
          /** @type {HTMLButtonElement!} */
          const button = shadow.querySelector('button')
          button.onclick = function() {
            console.log(shadow.host)
            shadow.host.dispatchEvent(new CustomEvent('follow', {
              detail: {
                id: 1,
                index: 1
              }
            }))
          }
        }
        connectedCallback() {} 
        disconnectedCallback() {}
        adoptedCallback() {}
        attributeChangedCallback(name, oldValue, newValue) {}
      }
      window.customElements.define('user-card', UserCard);
    </script>
  </body>
</html>

```