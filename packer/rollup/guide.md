# Guide

## 插件
1. rollup 默认不支持直接导入 json 文件，需要借助 `@rollup/plugin-json` 插件


## 模块解析原理
1. Rollup 遵循 Node ESM 语义。因此默认不支持导入 commonjs 模块，可以通过 `@rollup/plugin-commonjs`插件支持导入 commonjs 模块。


## 配置文件
1. Rollup 默认以 ESM 模块规范加载配置文件。若配置文件为 commonjs 模块，则需要将后缀修改为 ".cjs" 明确表示文件的类型。
2. 配置文件支持导出一个对象或数组。

## 命令行
```
-c, --config <filename>
    指定使用的配置文件

--environment
    配置当前进程的环境变量。配置文件，插件等都可以访问这些变量
    
-w, --watch
    监听指定文件夹，当文件夹发生变化时重新构建
```


## 核心配置
```typescript
export type Config {
    // 该选项用于匹配需要排除在 bundle 外部的模块（即不会打包进bundler）
    // 使用场景，这个模块挂载在 window 对象上面，不需要再次打包
    external: string | string[];

    // 入口文件
    input: string | string[] | Record<string, string>;

    // 输出
    output: {
        format: string;
        dir: string;
        file: string;
        name: string;
        entryFileNames: string;
        chunkFileNames: string;
    },

    // 观察选项
    watch: {
        exclude: any;
        include: any;
    }
}


// 使用外部依赖的情况
export const outputGlobalsCOnfig = {
    external: 'jquery';
    output: {
        // 指定外部依赖 jquery 映射为全局变量 $。
        globals: {
            jquery: '$'
        },
    }
}

// 生成单个 bundler 的配置
export const outputFileCOnfig = {
    output: {
        // 当输出格式(format 选项)为 iife / umd 的 bundler
        // 指定bundle路径和名字
        file: './dist/js/lib/vue.js',

        // 指定 bundler 在 window 对象上的全局变量名
        name: 'vue',
    }
}

// 生成多个 bundler 的配置
export const outputEntryFileNameCOnfig  = {
    input: {
        "main": 'src/main.js',
        "utils/share": 'src/utils/share.js'
    },
    output: {
        dir: './dist/',
        entryFileNames: string,
    }
}
```


## Plugins
- 路径引用别名替换: @rollup/plugin-alias
- 源代码字符串替换(如: process.env.NODE_ENV 环境变量判断替换)：@rollup/plugin-replace
- 模块解析算法: @rollup/plugin-node-resolve (使用 node 模块解析算法)



## Reference
- [官方：rollup 早期中文文档: 翻译了核心功能文档](https://www.rollupjs.com/configuration-options/#output-entryfilenames)
- [官方：rollup 最新文档](https://rollupjs.org/configuration-options/#output-entryfilenames)
- [官方：rollup 插件列表](https://github.com/rollup/awesome)


node 模块解析
esbuild