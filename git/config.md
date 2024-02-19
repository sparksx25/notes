# git


## 设置文件大小写
- 在使用 Git 进行版本控制时，有时候我们需要配置 Git 以忽略文件名大小写的变化，这主要是因为不同的操作系统对文件名大小写的敏感度不同。比如，在Windows系统中，文件名是不区分大小写的，而在Linux和Mac OS中，默认是区分大小写的.
- 设置忽略文件大小写 `git config core.ignorecase true`
- 默认值为 false，但在创建存储库时，git-clone 或 git-init 将探测并设置 `core.ignoreCase true`（如果适用）。


## 设置文件换行符
- Windows 使用回车（CR）和换行（LF）两个字符来结束一行，而 macOS 和 Linux 只使用换行（LF）一个字符。
- 注：使用 windows 自带的记事本创建的文本使用的是 CRLF 换行，且不支持修改换行符，需要使用高级编辑器修改换行符。
- 配置 `git config core.autocrlf` 指示 git 如何处理**文本文件**的换行符。
- `git config core.autocrlf false`。 `commit`和`checkout`文件时均不对换行符进行转换
- `git config core.autocrlf true`。  `commit`时将 `CRLF` 转换成 `LF`, `checkout`时将 `LF` 转成 `CRLF`
- `git config core.autocrlf input`。 `commit`时将 `CRLF` 转换成 `LF`, `checkout`时不进行转换


## gitattributes
.gitattributes 文件是 Git 版本控制系统中的一个配置文件，它允许你对仓库中的文件进行细粒度的属性设置,可以对特定的文件或文件类型定义特定的行为

.gitattributes 作用:
- 更加细粒度的标记文件类型(text|binary)，以及指定如何格式化这种类型文件的换行符
- 文本换行符自动转换
- 文本和二进制文件的区分
  
```conf
# Git 会自行决定文件是文本文件还是二进制文件，并且自动处理这些文本文件的换行符
* text=auto

# 指明 ".vue" 是文本文本，使用处理文本的方式处理该类型文件
*.vue text

# 指明 ".vue" 是文本文件，使用 crlf 换行
*.js text eol=crlf

# 指明 ".png/.jpg" 是二进制文件
*.png binary
*.jpg binary
```

- [配置 git 换行符](https://git-scm.com/book/zh/v2/%E8%87%AA%E5%AE%9A%E4%B9%89-Git-%E9%85%8D%E7%BD%AE-Git#_git_config)
- [github 文档](https://docs.github.com/zh/get-started)


## 仓库配置
当前 git 仓库的配置都在 `.git/config` 文件
```conf
[core]
  autocrlf = true
	ignorecase = true
	hooksPath = .husky
[remote "origin"]
	url = git@gitlab.sparksx.com:tony/play-control-h5.git
	fetch = +refs/heads/*:refs/remotes/origin/*
[branch "master"]
	remote = origin
	merge = refs/heads/master
[branch "zwf-bridge"]
	remote = origin
	merge = refs/heads/zwf-bridge
	description = 原生桥接调整
```

## 命令行配置
`git config --list`   
显示当前 git 仓库的所有配置

`git config user.name "zwf"`   
配置本地仓库的用户名

`git config user.name`   
显示本地仓库配置的用户名

`git config branch.zwf-bridge.description "原生桥接调整"`   
设置分支描述

`git config branch.zwf-bridge.description`   
查看分支描述
