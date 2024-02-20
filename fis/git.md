# git 规范

## 分支管理规范
一个项目可以创建两个分支：master 和 dev。

- 开发新功能   
  当团队成员开发新功能时，需要从 dev 上拉一个 `feature-功能名称-开发姓名` 分支进行开发，例如：feature-login-tgz。开发完成后需要合并回 dev 分支。

- 修改 bug   
  当团队成员修改 bug 时，需要从有 bug 的分支（环境）上拉一个 `bug-功能名称-开发姓名` 分支进行修复，例如：bug-login-tgz。修复完成后需要合并回原来出现 bug 的分支。
  以 feature 或 bug 开始的分支都属于临时分支，在通过测试并上线后需要将临时分支进行删除。避免 git 上出现太多无用的分支。


## git commit 规范
为什么使用约定式提交
- 自动化生成 CHANGELOG。
- 基于提交的类型，自动决定语义化的版本变更。
- 向同事、公众与其他利益关系者传达变化的性质。
- 触发构建和部署流程。
- 让人们探索一个更加结构化的提交历史，以便降低对你的项目做出贡献的难度。


## git hooks
客户端钩子
- `pre-commit` 钩子在键入提交信息前运行。 代码测试，lint 检查
- `prepare-commit-msg` 它允许你编辑提交者所看到的默认信息。 该钩子接收一些选项：存有当前提交信息的文件的路径、提交类型和修补提交的提交的 SHA-1 校验。 你可以结合提交模板来使用它，动态地插入信息。
- `commit-msg` 钩子接收一个参数，此参数即上文提到的，存有当前提交信息的临时文件的路径。 如果该钩子脚本以非零值退出，Git 将放弃提交，因此，可以用来在提交通过前验证项目状态或提交信息。 在本章的最后一节，我们将展示如何使用该钩子来核对提交信息是否遵循指定的模板。
- `post-commit` 钩子在整个提交过程完成后运行。


## git commit 检查
husky: 修改 git hooks 文件路径，执行 git hooks 自定义脚本
commitlint：使用 husky 自定义 git hooks 脚本的功能，提交时对提交信息进行检查



## 注意
1. 注意可执行文件的编码格式需要是 utf8
2. commitlint.config.mjs 配置文件后缀 `.cjs/.mjs` 与 项目的`package.json` 中的 `type` 属性相关


## 参考文章
- [约定式提交规范](https://www.conventionalcommits.org/zh-hans/v1.0.0/)
- [commitlint 文档](https://commitlint.js.org/#/reference-configuration)
- [git 官方文档: git hooks](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-Git-%E9%92%A9%E5%AD%90)
