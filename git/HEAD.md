# HEAD

## SYNOPSIS
在 Git 中，HEAD 是一个指向**当前活动分支**的指针。它通常指向最新的提交（commit），即最近一次提交的 SHA-1 值。   

Git 中的 HEAD 实际上是一个文件，存储在 .git 目录下。在默认情况下，它位于 Git 仓库的根目录中，
使用 cat .git/HEAD 命令可以查看它的内容。通常情况下，HEAD 的内容如下:
```
ref: refs/heads/master
```