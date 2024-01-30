# ESLint
- [安装 eslint 库](#install-lib)

## 1. 安装 eslint npm 包  {#install-lib}
安装 `eslint` 包
- 局部安装: `npm install --save-dev eslint`
- 全局安装: `npm install -g eslint`


## 2. 安装 eslint 插件  {#install-extensions}
- `vscode`安装`eslint`插件
- 配置 vscode `settings.json`

```json
{
  "eslint.enable": true,
  "eslint.format.enable": true,
  "editor.codeActionsOnSave": {
    // 以下设置为包括 ESLint 在内的所有提供程序打开自动修复
    // "source.fixAll": "explicit",
    // 相比之下，此配置仅对 ESLint 启用它
    "source.fixAll.eslint": "explicit",
  },
}
```


## 创建 elsint 配置 {#create-config}
- 使用`vscode`任务面板执行插件提供的命令创建配置文件
- 使用命令行 `npm init @eslint/config`，可以根据提示交互式创建配置文件
- 也可以使用 `javascript` 注释指定使用的规则
- 具体详细配置可查看 `eslint npm` 包


## eslintrc.json 常用配置
```json
{
  // 指明当前目录是根目录，不在向上查找 eslint 配置
  "root": true,
  // 环境提供预定义的全局变量 @see{https://eslint.org/docs/latest/use/configure/language-options}
  "env": {
    "browser": true,
    "es2021": true
  },
  "globals": {
    "var1": "writable",
    "var2": "readonly"
  },
  // 配置文件一旦扩展，可以继承另一个配置文件的所有特征（包括规则、插件和语言选项）并修改所有选项
  "extends": [
    "plugin:vue/vue3-recommended",
    "standard",
  ],
  // vue-eslint-parser 解析单文件组件.vue, @typescript-eslint/parser 解析 .ts,.tsx
  // 规则解析器，默认使用 eslint 的 espree
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "ecmaFeatures": {
      "modules": true
    },
    "parser": "@typescript-eslint/parser",
    "sourceType": "module",
    "requireConfigFile": false
  },
  "processor": {},
  // "settings"：{}
  // 插件是一个 npm 包，可以向 ESLint 添加各种扩展。
  // 插件可以执行许多功能，包括但不限于添加新规则和导出可共享的配置。确保软件包已安装在 ESLint 可以要求它的目录中
  // "vue" 对应 eslint-plugin-vue
  "plugins": ["vue"],
  // 对所有文件的 eslint 规则进行覆盖或调整
  "rules": {},
  // 禁止行内规则配置
  // noInlineConfig: true
  // 对某些文件的 eslint 规则进行覆盖或调整，可以使用通配符模式
  "overrides": {},
  // 忽略 eslint 检查的文件
  "ignorePatterns": ["temp.js", "**/vendor/*.js"],
}
```

## eslintignore 忽略文件


## 其他配置
1. 使用 `/* global var1:writable, var2:writable */` 配置全局变量可读可写
2. 使用 `/* eslint-env node, mocha */` 指定环境
3. 请注意，支持 JSX 语法并不等同于支持 React
4. 出于同样的原因，支持 ES6 语法并不等同于支持新的 ES6 全局变量（例如，新类型，如 Set ）。对于 ES6 语法，请使用 { "parserOptions": { "ecmaVersion": 6 } } ;对于新的 ES6 全局变量，请使用 { "env": { "es6": true } } 。设置 { "env": { "es6": true } } 会自动启用 ES6 语法，但 { "parserOptions": { "ecmaVersion": 6 } } 不会自动启用 ES6 全局变量。总之，要仅支持 ES6 语法，请使用 { "parserOptions": { "ecmaVersion": 6 } } ，并且要同时支持 ES6 语法和新的 ES6 全局变量（如 Set and 等），请使用 { "env": { "es6": true } } .


## 参考资料
- [eslint 官方文档](https://eslint.org/docs/latest/use/configure/language-options)
- [eslint vue plugin](https://eslint.vuejs.org/user-guide/)
- [eslint vscode插件文档](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)