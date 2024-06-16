# git branch

## 查看分支列表
- git branch   
  显示本地分支

- git branch -a   
  显示所有分支

- git branch -r   
  查看所有可用的远程分支


## 创建分支
- git branch `branch_name`   
  根据当前分支创建一个新分支 

- git checkout -b `branch_name`   
  根据当前分支创建一个新分支并切换到新分支

- git checkout -b `<branch>` --track `<remote>/<branch>`
  创建一个跟踪且与远程分支同名的本地分支，创建成功后切换到新创建的分支


## 切换分支
- git checkout `branch_name`   
  切换分支



## 删除分支
- git branch -d `branch_name`   
  删除本地分支

- git branch -D `branch_name`   
  强制删除本地分支

- git push origin -d `remote_branch`   
  删除远程分支


### 合并分支
- git merge `branch_name`   
  将分支`branch_name`合并到当前分支

- git merge --abort    
  在当前合并冲突的情况下，取消这次合并


## 推送分支
- git push   
 将本地的当前分支推送到远程的同名分支

- git push -u origin `branch_name`   
  -u 是 --set-upstream 的简写。将`branch_name`分支推送到远程，并在远程创建一个同名的`branch_name`分支，同时建立跟踪


## 重命名
- git branch -m `old_branch` `new_branch`   
  重命名分支


## 仓库分支同步
- git fetch --prune origin
从远程仓库 `origin` 中获取最新的更新，并且删除本地已经不存在于远程仓库的分支。

## 其他
- git config branch.`branch_name`.description   
  配置分支描述信息

- git branch --set-upstream-to=origin/`remote_branch` `local_branch`   
  设置本地分支跟踪远程分支，如果本地分支和远程分支不是同名的，那么 `git pull` 时不会自动合并代码
