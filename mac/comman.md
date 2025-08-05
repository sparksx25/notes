# mac 常用命令

## open
open 是一个命令行工具，用于打开文件、应用程序或其他资源。
```shell
# 打开文件
open /path/to/file

# 打开应用程序，应用程序在 /Applications目录中
open -a QQ.app

# 打开网址
open -u http://example.com
```


## 应用卸载
- [mac卸载图标带锁的应用程序](https://zhuanlan.zhihu.com/p/20329604974)
```
sudo /usr/bin/chflags -R noschg /Applications/CorpLink.app
sudo rm -rf /Applications/CorpLink.app
```

