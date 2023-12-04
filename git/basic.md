# git 常用命令

## 撤销
- git checkout [file]   
  将指定的暂存区文件内容覆盖到工作区的当前文件，不会影响到暂存区的内容

- git checkout .
  将暂存区的所有文件内容覆盖到工作区，不会影响到暂存区的内容

- git checkout [commit] [file]     
  恢复某个commit的指定文件到暂存区和工作区

- git reset [file]    
  重置暂存区的指定文件，与上一次commit保持一致，但工作区不变

- git reset --hard    
  重置暂存区与工作区，与上一次commit保持一致

- git reset [commit]   
  重置当前分支的指针为指定commit，同时重置暂存区，但工作区不变

- git reset --hard [commit]    
  重置当前分支的HEAD为指定commit，同时重置暂存区和工作区，与指定commit一致

- git reset --keep [commit]     
  重置当前HEAD为指定commit，但保持暂存区和工作区不变

- git revert [commit]     
  新建一个commit，用来撤销指定commit
  后者的所有变化都将被前者抵消，并且应用到当前分支
