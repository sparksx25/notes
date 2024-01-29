# 前端工程化
也叫前端集成解决方案(Front-end Integrated Solution)

## 参考资料
[张云龙 github](https://github.com/fouber/blog)
[带你入门前端工程](https://woai3c.gitee.io/introduction-to-front-end-engineering/02.html#%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83)

## 前端开发框架选型


## 开发规范
git 提交规范

[编码风格 editorconfig](https://editorconfig.org/)

代码规范一般包含了代码格式规范、变量和函数命名规范、文档注释规范等等。
代码格式一般是指代码缩进使用空格还是 Tab、每行结尾要不要加分号、左花括号需不需要换行等等
变量命名：小驼峰式命名法（lower camel case），大驼峰式命名法（upper camel case），下划线命名法（snake case），
匈牙利命名法：这种方式在变量名的前面加上表示变量类型或属性的前缀

Stylelint 是一个开源的、用于检查 CSS 代码格式的开源工具。具体如何使用请看下一节。

目录结构的制定
编码规范
前后端接口规范
文档规范
组件管理
Git分支管理

## 代码质量
jest
JSLint
CSSLint

## 模块化开发


## 组件化开发


## 性能优化
- [雅虎开发者文档](https://developer.yahoo.com/performance/rules.html)


|         优化方向     |                           	优化手段                           |
|           ---       |                             ---                               |
|       请求数量	    | 合并脚本和样式表，CSS Sprites，拆分初始化负载，划分主域     |
|       请求带宽	    | 开启GZip，精简JavaScript，移除重复脚本，图像优化              |
|       缓存利用      | 使用CDN，使用外部JavaScript和CSS，添加Expires头，减少DNS查找，配置ETag，使AjaX可缓存    |
|       页面结构	    | 将样式表放在顶部，将脚本放在底部，尽早刷新文档的输出                 |
|       代码校验	    | 避免CSS表达式，避免重定向  |

运行时性能优化


## 项目部署
项目部署：部署按照现行业界的分工标准，虽然不是前端的工作范畴，但它对性能优化有直接的影响，包括静态资源缓存、cdn、非覆盖式发布等问题。合理的静态资源资源部署可以为前端性能带来较大的优化空间。

线上发布：
- 根据文件内容生成 `contentHash` 作为文件名，确保相同内容相同的文件生成的`contentHash`一样
- 根据入口文件递归文件的资源依赖关系，首先构建最底层被依赖的资源文件名。
- 部署发布时，先更新资源文件（如js，css，图片），最后更新 html，采用非覆盖式发布
