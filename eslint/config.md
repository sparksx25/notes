- [eslint](https://eslint.org/docs/latest/use/core-concepts/)
- [ts elint](https://typescript-eslint.io/getting-started/)
- [eslint-plugin-vue](https://eslint.vuejs.org/developer-guide/)

# migarate

## config file

`>=v9.0.0`: 只支持以下配置文件

- eslint.config.js
- eslint.config.mjs
- eslint.config.cjs

## format

`<v9.0.0` eslint 内置了格式化程序
`>=v9.0.0` eslint 不在提供格式化功能，需要使用 prettier 插件

ESLint 附带了多个内置报告器，包括 stylish （默认）、 json 和 html,
报告器依旧提供代码风格错误的报告，但是不在提供代码风格格式化的 API。
代码风格相关的功能已经分离出来作为另外一个项目。
ESLint 不再推荐格式化规则，并且之前已弃用其内置格式化规则。 ESLint 建议使用专用格式化程序，例如 Prettier 或 dprint。或者，ESLint Stylistic 项目提供与格式相关的 lint 规则。

vscode eslint 插件提供了代码修复功能，命令

- [eslint即将弃用代码风格检查](https://eslint.org/blog/2023/10/deprecating-formatting-rules/)
所有这些规则将在下一个版本中被弃用，但至少要到 ESLint v10.0.0（如果不是更晚的话）才会被删除。尽管您可能会在 ESLint CLI 中看到弃用警告，但您可以继续使用它们。

## 覆盖插件中的规则

使用注册的插件名/插件中的规则

```js

config = [
    {
        plugins: {
            vue: {
                rules: {
                    "no-undef": "error"
                }
            }
        },
    }，
    {
        rules: {
            "vue/no-undef": "warn"
        }
    }
]
```

## js 风格检查

- [eslint.style](https://eslint.style/guide/getting-started)

# prettier

- eslint-config-prettier
  这些预制配置，可以轻松关闭与 Prettier 冲突或不必要的规则：
  关闭 eslint 的代码风格检查：在 ESLint 中使用禁用这些与 prettier 重叠的规则

- eslint-plugin-prettier
  根据 prettier 配置进行代码格式化
  内置了 `eslint-config-prettier` 插件配置，并且将代码风格错误以 eslint 的格式显示到控制台，并增加红色的波浪线

- [prettier 的缺点](https://antfu.me/posts/why-not-prettier-zh)

- [prettier](https://prettier.io/docs/en/editors)

vscode prettier 插件
不会有任何代码风格错误提示，仅仅只是做代码格式化功能

```json
{
  "prettier.enable": true,
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode"
}
```


```js
import eslintConfig from "@eslint/js";

import { configs as TSConfigs, parser as TSParser } from "typescript-eslint";

import VueParser from "vue-eslint-parser";
import pluginVue from "eslint-plugin-vue";
import stylishRecommended from "eslint-plugin-prettier/recommended";

export default [
  eslintConfig.configs["recommended"],
  ...TSConfigs["recommended"],
  ...pluginVue.configs["flat/essential"],
  {
    languageOptions: {
      parser: VueParser,
      parserOptions: {
        requireConfigFile: true,
        parser: TSParser,
        ecmaVersion: "latest",
        sourceType: "module",
      },
    },
  },
  {
    files: ["src/**/*.js", "src/**/*.ts", "src/**/*.tsx", "src/**/*.vue"],
    ignores: ["src/static/**/*", "dist/**/*"],
    rules: {
      "no-console": 2, //禁止使用console
      "prettier/prettier": [
        "error",
        {
          semi: false,
          singleQuote: false,
        },
      ],
    },
  },
  stylishRecommended,
];

```

```json
{
    "eslint.enable": true,
    "eslint.format.enable": true,
    // use editor.codeActionsOnSave(deprecated) instead of "eslint.autoFixOnSave"
    "editor.codeActionsOnSave": {
        "source.fixAll.eslint": "always"
    }, 
    "eslint.validate": [
        "javascript",
        "javascriptreact",
        "typescript",
        "typescriptreact",
        "html",
        "vue",
        "markdown"
    ],
}
```
```json
{
  "[vue]": {
    "editor.formatOnSave": true,
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```