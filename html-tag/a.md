# a 标签

## target属性介绍
target 属性常用的值有:
- _self(默认值) ： 在当前窗口打开链接

- _blank : 在新的窗口打开链接,此时新的窗口可以通过`window.opener`访问父窗口的window对象，存在安全问题
可以通过设置 `rel='noopener noreferrer'` 防止访问父窗口。

- _top : 在当前顶层窗口打开链接


## 参考链接
[target=_blank属性的安全漏洞](https://blog.bolajiayodeji.com/the-security-vulnerabilities-of-the-target-blank-attribute)