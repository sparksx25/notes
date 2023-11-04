# git

## 参考资料
- [git 官网文档](https://git-scm.com/book/zh/v2)
- [阮一峰：Git 原理入门](https://www.ruanyifeng.com/blog/2018/10/git-internals.html)
- [阮一峰：常用 Git 命令清单](https://www.ruanyifeng.com/blog/2015/12/git-cheat-sheet.html)
- [阮一峰：如何撤销 Git 操作？](https://www.ruanyifeng.com/blog/2019/12/git-undo.html)
- [阮一峰：git cherry-pick 教程](https://www.ruanyifeng.com/blog/2020/04/git-cherry-pick.html)


## 分支
- git branch 显示本地分支

- git branch -a 显示所有分支

- git branch -r 查看所有可用的远程分支

- git branch `branch_name` 根据当前分支创建一个新分支

- git branch -d `branch_name` 删除本地分支

- git config branch.`branch_name`.description 配置分支描述信息

- git branch --set-upstream-to=origin/`remote_branch` `local_branch` 设值本地分支跟踪远程分支

- git push origin -d `remote_branch` 删除远程分支

- git branch -m `old_branch` `new_branch` 重命名分支

### 切换分支
- git checkout `branch_name` 切换分支

- git checkout -b `branch_name` 根据当前分支创建一个新分支并切换到新分支

- git checkout -b `branch_name` origin/`remote_branch_name`
从远程分支切换一个新分支 `branch_name`，并且这个新分支跟踪远程分支`remote_branch_name`


### 合并分支

- git merge `branch_name` 将分支`branch_name`合并到当前分支

- git merge --abort 在当前合并冲突的情况下，取消这次合并




## 推送
- git push 将本地的当前分支推送到远程的同名分支