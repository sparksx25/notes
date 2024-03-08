# npm CLI 

## npm view
> 查看指定包的`package.json`相关配置    

```
# 查看指定包的 package.json 信息
npm view [<package-spec>] [<field>[.subfield]...]

# 查看 vue 的所有版本
npm view vue versions

# 查看指定的字段
npm view vue@3.0.0 dependencies

aliases: info, show, v
e.g. npm view vue@3.0.0 dependencies
```


## npm run    
列举当前项目 `package.json` 文件 `scripts` 属性配置的 npm 脚本。


## 参考文章
- [npm scripts](https://docs.npmjs.com/cli/v6/using-npm/scripts)
- [阮一峰: npm_scripts](https://www.ruanyifeng.com/blog/2016/10/npm_scripts.html)