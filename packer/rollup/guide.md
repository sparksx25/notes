# Guide

## 使用配置文件
1. 支持通过 `rollup.config.mjs` 进行 rollup 配置
2. Rollup 本身会处理配置文件，所以配置文件中支持使用 import, export

```js
import json from '@rollup/plugin-json';
export default {
	input: 'src/main.js',
	output: [
    {
			file: 'bundle.js',
			format: 'cjs'
		},
		{
			file: 'bundle.min.js',
			format: 'iife',
			name: 'version',
			plugins: [terser()]
		},
    {
      assetFileNames: "assets/[name]-[hash][extname]",
      entryFileNames: "[name].js",
      chunkFileNames: "[name]-[hash].js",
      format: 'es',
      // 使用原始模块名作为文件名，为所有模块创建单独的 chunk
      preserveModules: true
    }
  ],
	plugins: [json()],
  // 指出哪些模块应该视为外部模块
  // 外部模块不会被打包到 bundler 中
	external: ['lodash']
};
```

## 插件
1. rollup 默认不支持直接导入 json 文件，需要借助 `@rollup/plugin-json` 插件