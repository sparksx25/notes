# 代码提交检查

## SYNOPSIS
当代码提交到本地或远程仓库时对代码质量进行自动化检查。


## 工具链
1. husky npm 包提供了 git hooks 的支持，使得能够在 git 的不同阶段执行不同的 shell 脚本。
2. lint-staged 包可以对暂存区的不同文件执行不同的检查任务


## 参考地址
- [github husky](https://github.com/typicode/husky/blob/main/index.mjs)
- [lint-staged](https://www.npmjs.com/package/lint-staged)