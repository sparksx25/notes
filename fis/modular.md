# 模块化开发

- 利用模块化开发规范（如 CommonJS、AMD、ES6 Module）将代码拆分成独立的模块，提高代码复用性和可维护性。
- 使用打包工具（如 Webpack、vite、Parcel）将模块打包成可部署的静态资源文件。


## Webpack
- Webpack 是一个功能强大的模块打包工具，可以将项目中的各种文件（包括 JavaScript、CSS、图片等）视为模块，通过 loader 和 plugin 等机制对其进行处理和转换，并最终输出一个或多个打包后的文件。
- Webpack 具有**高度的可配置性和扩展性**，可以满足各种复杂项目的需求，但需要开发者对其配置和使用有一定的了解和掌握。
- Webpack 5 更新了许多新特性，如持久化缓存、优化构建性能、模块联邦等，进一步提高了其打包效率和开发体验。

优点:
- 有丰富的生态，插件系统比较强大，对各种模块系统兼容性最佳（AMD, umd, cjs, esm）
- 支持自定义代码拆分 code-splitting，持久化缓存，tree-shaking，提取公共代码

缺点：
- 产物不够干净，产物不支持生成 esm 格式， 插件开发上手较难，不太适合库的开发
- 构建慢: loader 之间不知道彼此的存在，导致模块存在多部转译的时候存在多次 parse(转成 AST 树)的情况
- 配置复杂


## vite
- Vite 是一个基于 ES Modules 的构建工具，利用浏览器原生支持 ES Modules 的特性，旨在提供更快的开发服务器和更快的生产构建。
- Vite 将会使用 **[esbuild 预构建依赖](https://cn.vitejs.dev/guide/dep-pre-bundling)**，以 原生 ESM 方式提供源码。Vite 只需要在浏览器请求源码时进行转换并按需提供源码。
- 生产环境使用 Rollup 打包，将相关依赖打包成一个文件，减少网络往返


特性：
- 支持将资源内联为 base64 编码。通过 build.assetsInlineLimit 设置

优点：
1. 使用原生 ES 模块和热模块替换进行快速开发构建。
2. 无需配置，节省了开发人员的时间和麻烦。

缺点：
1. 与其他构建工具相比，插件生态系统有限。
2. 不适用于需要复杂构建过程的大型单片应用。


## Parcel
- Parcel 强调极速**零配置**Web应用打包工具，它利用多核处理提供了极快的速度，并且不需要任何配置
- Parcel 能够自动处理项目中的各种文件类型，包括 JavaScript、CSS、HTML、图像等。
- Parcel 支持代码分割、HMR 等，使得开发者无需进行额外的配置即可使用。
- Parcel最大的优势：因为webpack的每个 loader 都要生成一遍AST，Parcel 则不用，只需生成一次AST（相当于Parcel内置了loader，才能做此优化）

优点：
1. 零配置：Parcel 几乎不需要配置，因此对于小型项目或刚接触捆绑的开发人员来说，它是一个不错的选择。
2. 速度：由于其多核编译，Parcel 通常比 Webpack 更快，并且拥有快速的 HMR。
3. 内置转译：Parcel 内置了对 Babel 和 TypeScript 转译的支持。


缺点：
1. 灵活性：虽然 Parcel 的零配置方法是一种优势，但如果您需要自定义捆绑过程，它也可能是一个限制。虽然可以扩展 Parcel 的功能，但它不能提供与 Webpack 相同程度的控制


## ESBuild
- ESBuild 使用 Go 编写，并且比以 JavaScript 编写的打包器预构建依赖快 10-100 倍。
- 强调性能，内置了对css、图片、react、typescript等内置支持，编译速度特别快(是webpack和rollup速度的100倍+),缺点是目前插件系统较为简单，生态不如webpack和rollup成熟。


缺点：
1. 插件生态系统：作为一个较新的工具，esbuild 的插件生态系统仍然不如 Webpack 或 Rollup 的那么广泛。


## turbopack
缺点:
1. 对 Webpack 插件的支持有限，因为仅实现了 webpack 加载器 API 的核心子集。
2. 不支持使用 TypeScript 进行类型检查，因此您需要为此实现第二个工具。
3. 用 Rust 编写意味着更难跳入源代码并修复您发现自己的错误


## Snowpack
Snowpack 也是一个与 Vite 十分类似的非构建式原生 ESM 开发服务器。该项目**已经不维护**了。团队目前正在开发 Astro，一个由 Vite 驱动的静态站点构建工具


## Rollup
强调对库开发的支持，基于 ESM 模块系统，对tree shaking有着良好的支持，**产物非常干净**，**支持多种输出格式（iife, umd, esm）**，适合做库的开发，插件api比较友好，缺点是对cjs支持需要依赖插件，且支持效果不佳需要较多的hack，不支持HMR，做应用开发时需要依赖各种插件

优点:
1. Rollup 以其“tree-shaking”的能力而闻名，以消除未使用的代码并创建更小的捆绑包大小。
2. 输出格式：Rollup 支持多种输出格式，包括 AMD、CommonJS、SystemJS、ES、IIFE 和 UMD。


缺点：
有限范围：Rollup 主要用于库捆绑，因此它不像 Webpack 和 Parcel 那样处理开箱即用的图像和 CSS 等资产。


## gulp
将指定/匹配 文件，文件夹作为输入，对文件、文件夹执行一系列加工，最后将加工后的进行输出。
相比于 grunt， gulp的周下载量更高

常见应用：
  1. 将指定目录下的 sass 文件 转为 css 文件 


## grunt
与 gulp 起相同的作用


## Reference
- [构建工具之间的差异](https://cloud.tencent.com/developer/article/2030300)
- [比较 6 个 JavaScript 打包工具](https://medium.com/javascript-in-plain-english/comparing-5-javascript-bundling-tools-webpack-turbopack-parcel-rollup-and-esbuild-ce9f8af4753d)