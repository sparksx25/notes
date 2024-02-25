# 前端工程化
也叫前端集成解决方案(Front-end Integrated Solution)

## 参考资料
[fis](https://github.com/fouber/blog)
[带你入门前端工程](https://woai3c.gitee.io/introduction-to-front-end-engineering/02.html#%E4%BB%A3%E7%A0%81%E8%A7%84%E8%8C%83)


## 前端开发框架选型
- [React 与 Vue 技术选型](https://mp.weixin.qq.com/s?__biz=MzAxODcyNjEzNQ==&idx=3&mid=2247571219&sn=77d2e326bd8039bafd47eaf4b4577a9d)


## 代码规范
- [编码风格](./code-style.md)
- [typescript 强类型约束与语法提示](./ts.md)
- [js 代码规范](./eslint.md)
- [css 代码规范](./stylelint.md)
- [git 提交规范](./git.md)
- [代码提交检查](./code-test.md)


## 模块化开发
- 利用模块化开发规范（如 CommonJS、AMD、ES6 Module）将代码拆分成独立的模块，提高代码复用性和可维护性。
- 使用打包工具（如 Webpack、vite、Parcel）将模块打包成可部署的静态资源文件。


## 性能优化
- [性能优化](./performance.md)


## 自动化测试
1. 单元测试
2. 集成测试
3. 端到端测试


## 持续集成
将代码集成到共享仓库（如 GitLab、GitHub）后，使用持续集成工具（如 Jenkins、Travis CI、CircleCI）自动触发构建、运行测试，并部署到测试环境或生产环境


## 持续部署
- 缓存：根据文件内容生成 `contentHash` 作为文件名，确保相同内容的文件生成的`contentHash`一样，不同内容的文件生成不一样的哈希
- 非覆盖式部署: 部署新版本时，先更新资源文件（如js，css，图片），最后更新 html。旧版资源依旧保留

如果有条件和需要可以采用“灰度发布”。


## 网站安全
XSS: （Cross-Site Scripting）跨站脚本攻击
CSRF: （Cross-site request forgery） 跨站请求伪造
CSP: （Content Security Policy） 内容安全策略


## 前端监控


## 其他需求
1. 移动端设备屏幕适配
2. 网站换肤
