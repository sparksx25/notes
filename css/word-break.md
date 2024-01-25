# 文本换行

## word-break
CSS 属性 word-break 指定了怎样在**单词内**断行。可以设置以下属性值       

normal: 使用默认的断行规则
- CJK(中日韩)文字可在任意字符间断行
- Non-CJK 文本只在空白处断行(比如英文，数字及它们的组合默认都不换行)
- 连续的 CJK 与 Non-CJK 组合文本，如果当前行排列不下连续的 Non-CJK 文本，则会在 Non-CJK
连续文本的起始和结尾处断行（CJK 与 Non-CJK连接处包含英文冒号等符号比较特殊）。 

break-all: 对于 non-CJK (CJK 指中文/日文/韩文) 文本，可在任意字符间断行
- CJK 文本都可在任意字符间断行
- 非 CJK 文本也可以在任意字符间断行

keep-all: CJK 文本不断行。Non-CJK 文本表现同 normal
- 连续的 CJK 文本不断行
- 连续的 Non-CJK 文本只在空白处断行
- 连续的组合文本也只在空白处断行

break-word:
- 当前行剩余空间如果能完全包含下一个 Non-CJK 文本，则在当前行放置，否则换行放置，
Non-CJK 文本如果一行排列不下则可在任意字符间断行。所以可能出现文本之间存在一长段空白的情况。
- CJK 文本流式排列
     
[MDN: word-break](https://developer.mozilla.org/en-US/docs/Web/CSS/word-break)

## word-wrap 与 overflow-wrap
> 这个属性原本属于微软扩展的一个非标准、无前缀的属性，叫做 word-wrap，后来在大多数浏览器中以相同的名称实现。目前它已被更名为 overflow-wrap，word-wrap 相当于其别称

可设置的值有:   
- normal: 行只能在正常的单词断点（例如两个单词之间的空格）处换行。

- anywhere: 为防止溢出，如果行中没有其他可接受的断点，则不可断的字符串（如长词或 URL）可能会在任何时候换行。
在断点处不会插入连字符。在计算最小内容内在大小时，会考虑由单词换行引入的软换行机会。

- break-word: 与 anywhere 值相同，如果行中没有其他可接受的断点，则允许在任意点将通常不可断的单词换行，
但在计算最小内容内在大小时不考虑断字引入的软换行机会。
    
[MDN: overflow-wrap](https://developer.mozilla.org/zh-CN/docs/Web/CSS/overflow-wrap)


## white-space
> CSS white-space 属性用于设置如何处理元素内的空白字符。
> 这个属性指定了两件事：1. 空白字符是否合并，以及如何合并。2. 是否换行，以及如何换行。

```
white-space = 
  normal        |
  pre           |
  nowrap        |
  pre-wrap      |
  break-spaces  |
  pre-line    
```

- normal: 连续的空白符会被合并。源码中的换行符会被当作空白符来处理。并根据填充行框盒子的需要来换行
- pre-line: 连续的空白符会被合并。在遇到换行符或 <br> 元素时，或者根据填充行框盒子的需要换行。
- pre: 连续的空白符会被保留。仅在遇到换行符或 `<br>` 元素时才会换行。
- pre-wrap: 连续的空白符会被保留。在遇到换行符或 `<br>` 元素时，或者根据填充行框盒子的需要换行。


## letter-spacing

## word-spacing

## hypen: auto | none | manual  
CSS 属性 hyphens 告知浏览器在换行时如何使用连字符连接单词。可以完全阻止使用连字符，也可以控制浏览器什么时候使用，或者让浏览器决定什么时候使用。