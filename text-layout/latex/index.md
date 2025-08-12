
# 排版

- [知乎: Tex, LaTeX的基本使用](https://zhuanlan.zhihu.com/p/496078810)
- [官网: KaTex](https://katex.org/docs/supported)
- [Latex 在线练习](https://pipeak.share4y.cn/offline-practice)

## Tex 排版系统
TeX 是一种排版系统，由美国计算机科学家 Donald Knuth 开发，它基于宏语言的编程原理，专门用于生成和处理各种科技文献和出版物的复杂格式。

TeX 排版系统的主要特点包括：
- **强大的格式控制能力**：提供了非常精细的格式控制功能，可以轻松地定义和生成各种复杂的排版格式。
- **可移植性**：是一种独立于操作系统和硬件平台的排版系统，可在不同计算机系统和设备上运行。
- **可扩展性**：是一个开放源代码的排版系统，允许用户编写自己的宏命令和扩展库。
- **高质量输出**：生成的文档质量非常高。

TeX 已被广泛应用于各个科技领域，生成学术论文、书籍、期刊和其他出版物，还可用于创建电子文档和网络出版物。

- [维基百科：Tex](https://zh.wikipedia.org/wiki/TeX)


## LaTeX
LaTeX是一套以TeX描述的宏软件。LaTeX有很多预设的模版、样式。它比TeX更为结构化，如包含了供建立索引、表格、列表等的宏和公用软件。

- [LaTeX官网](https://www.latex-project.org/about/)
- [维基百科：LaTex](https://zh.wikipedia.org/wiki/LaTeX)

## MathJax、Katex
MathJax、Katex 是两个js工具库。 这些工具可以将 LaTeX 公式转换为可视化的数学表达式，并在浏览器中显示。   
LaTeX是一种文档布局语言，所以 MathJax、Katex 只支持用于描述数学表示法的LaTeX子集。

- KaTeX 通过 html, css 配合文字符号绘制数学表达式
- MathJax 通过 svg 绘制数学表达式

- [KateX](https://katex.org/)    
- [MathJax](https://www.mathjax.org/#features)


## markdown 中使用 KaTeX
markdown 中使用方式如下

$ \log_{2}(n+1) $

$$
\log_{2}(n+1)
$$

$ 
\begin{align} 
  \log_{2}(n+1)
\end{align} 
$ 


