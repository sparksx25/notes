# 发布 npm 包

## .npmignore
通过 `.npmignore` 文件可以配置将本地项目中的哪些文件发布到 npm 仓库

```
.npmrc
.vscode
node_modules
.editorconfig
.git
.gitignore
.npmignore
.pnpm-lock.yaml
package-lock.json
```

## 配置发布镜像地址

配置优先级: 
1. `package.json` 中 `publishConfig.registry`  中的优先级最高
2. 其次 `.npmrc` 中的 `registry` 配置
3. 接着是用户目录下的 `.npmrc` 配置
4. 最后是系统层级的 `.npmrc` 配置（如果有的话）
   
```json
{
    "publishConfig": {
      "registry": "http://nexus.bwcjxt.com/repository/npm-snapshots/"
    },
}
```