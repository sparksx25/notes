# npm scripts

## 什么是 npm
npm 允许在package.json文件里面，使用scripts字段定义脚本命令。

## 原理
npm 脚本的原理非常简单。每当执行npm run，就会自动新建一个 Shell，在这个 Shell 里面执行指定的脚本命令。
因此，只要是 Shell（一般是 Bash）可以运行的命令，就可以写在 npm 脚本里面。    

比较特别的是，npm run新建的这个 Shell，会将当前目录的node_modules/.bin子目录加入PATH变量，执行结束后，再将PATH变量恢复原样。

这意味着，当前目录的node_modules/.bin子目录里面的所有脚本，都可以直接用脚本名调用，而不必加上路径


## Life Cycle Scripts 
prepare:
- 在本地 npm install 时运行（不带任何参数），

## Life Cycle Operation Order
`npm install`
  - preinstall
  - install
  - postinstall
  - prepublish
  - prepare


## 钩子
npm 脚本有pre 和 post 两个钩子。举例来说，build 脚本命令的钩子就是 prebuild 和 postbuild。


## 参考文章
- [阮一峰: npm scripts](https://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)