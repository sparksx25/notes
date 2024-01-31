# stylelint

## 安装 stylelint 包
`npm install -D stylelint `


## 安装 vscode stylelint 插件
插件默认会加载项目根目录的 `stylelint`配置文件作为配置

`.vscode/settings.json`
```json
{
  // 根据插件提示需要禁用 vscode 内置样式检查，防止重复样式检查
  "css.validate": false,
  "less.validate": false,
  "scss.validate": false,
  // stylelint 配置
  "stylelint.enable": true,
  "editor.codeActionsOnSave": {
    "source.fixAll.stylelint": true,
  },
  "stylelint.validate": [
    "css",
    "less",
    "scss",
    "postcss"
  ]
}
```

## 创建配置文件
`.stylelintrc.json`
`.stylelintignore`


## 配置规则
`stylelint-config-standard-scss` npm 包配置
```json
{
	"extends": ["stylelint-config-standard", "stylelint-config-recommended-scss"],
}
```

`stylelint-config-standard` npm 包配置
```json
{
	"extends": "stylelint-config-recommended",
}
```

`stylelint-config-recommended-vue` npm 包 支持 vue 文件


## 参考文档
- [官方文档: stylelint](https://stylelint.io/user-guide/get-started)
- [官方文档: stylelint插件列表](https://stylelint.io/awesome-stylelint/)
- [vscode-stylelint插件](https://marketplace.visualstudio.com/items?itemName=stylelint.vscode-stylelint)