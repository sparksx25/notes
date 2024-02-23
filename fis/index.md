# 前端工程化
也叫前端集成解决方案(Front-end Integrated Solution)

## 参考资料
[fis](https://github.com/fouber/blog)
[带你入门前端工程](https://woai3c.gitee.io/introduction-to-front-end-engineering/02.html#%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83)


## 前端开发框架选型
- [React 与 Vue 技术选型](https://mp.weixin.qq.com/s?__biz=MzAxODcyNjEzNQ==&idx=3&mid=2247571219&sn=77d2e326bd8039bafd47eaf4b4577a9d)


## 编码风格与风格检查
- [编码风格](./code-style.md)
- [typescript 强类型约束与语法提示](./ts.md)
- [js 代码规范](./eslint.md)
- [css 代码规范](./stylelint.md)
- [git 提交规范](./git.md)
- [代码提交检查](./code-test.md)


## 模块化开发
styled-component
css in js


## 组件化开发


## 图标库
字体图标， svg 图标

## 测试
1. 单元测试
2. 集成测试
3. 端到端测试


## 前端监控


## 性能优化
- [性能优化](./performance.md)
- [雅虎开发者文档](https://developer.yahoo.com/performance/rules.html)


## 项目部署
项目部署：部署按照现行业界的分工标准，虽然不是前端的工作范畴，但它对性能优化有直接的影响，包括静态资源缓存、cdn、非覆盖式发布等问题。合理的静态资源资源部署可以为前端性能带来较大的优化空间。

线上发布：
- 根据文件内容生成 `contentHash` 作为文件名，确保相同内容相同的文件生成的`contentHash`一样
- 根据入口文件递归文件的资源依赖关系，首先构建最底层被依赖的资源文件名。
- 部署发布时，先更新资源文件（如js，css，图片），最后更新 html，采用非覆盖式发布


## 网站安全
XSS: （Cross-Site Scripting）跨站脚本攻击
CSRF: （Cross-site request forgery） 跨站请求伪造
CSP: （Content Security Policy） 内容安全策略