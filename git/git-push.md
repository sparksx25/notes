# git push

## SYNOPSIS
```
git push
  [-d | --delete]
  [-u | --set-upstream]
  [<repository>]
```

## Description
当命令行未指定使用 `<repository>` 参数推送的位置时， `branch.*.remote` 将参考当前分支的配置以确定推送位置。如果缺少配置，则默认为 origin。