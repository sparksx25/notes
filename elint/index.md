# ESlint 配置

## 配置思想
1. `prettier` 和 `eslint` 都可以进行代码风格的格式化。
2. 代码风格使用 `prettier` 进行格式化，`prettier` 相对简约轻量。
3. 代码质量检查使用 `eslint`
4. `eslint-config-prettier` 配置会关闭 `eslint` 的代码风格规则，使用 `eslint-plugin-prettier` 插件合并 `prettier` 配置然后使用 `prettier`插件进行代码格式化。 `eslint-plugin-prettier` 插件会将不符合 `prettier` 风格的代码作为 `eslint` 错误进行提示。

# < 9.0
eslint配置
```json
{
  "env": {
    "browser": true,
    "es2021": true
  },
  "globals": {
    "window": true,
    "process": true
  },
  "extends": [
    "eslint:recommended",
    "plugin:vue/vue3-essential",
    "plugin:@typescript-eslint/recommended",
    "plugin:prettier/recommended"
  ],
  "parser": "vue-eslint-parser",
  "parserOptions": {
    "ecmaVersion": "latest",
    "parser": "@typescript-eslint/parser",
    "sourceType": "module"
  },
  "plugins": ["vue", "@typescript-eslint"],
  "rules": {
    "vue/multi-word-component-names": 0,
    "@typescript-eslint/no-explicit-any": 0
  }
}

prettier配置
```json
{
  "printWidth": 140, 
  "tabWidth": 2, 
  "useTabs": false, 
  "semi": true,
  "singleQuote": true, 
  "trailingComma": "all",
  "insertPragma": false,
  "endOfLine": "lf",
  "singleAttributePerLine": true,
  "vueIndentScriptAndStyle": false,
  "proseWrap": "never",
  "htmlWhitespaceSensitivity": "strict"
}
```
```