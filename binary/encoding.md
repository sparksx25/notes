# 字符编码

## 计算机储存
1字节(Byte) = 8比特位(bite: 位)


## 编码，解码
> 编码是信息从一种形式或格式转换为另一种形式的过程。用预先规定的方法将文字、数字或其它对象编成数码，
或将信息、数据转换成规定的电脉冲信号。解码，是编码的逆过程。

编码种类：字符编码，PCM编码，加密


## 字符、字符集， 字符编码
> 字符（Character）是各种文字和符号的总称，包括各国家文字、标点符号、图形符号、数字等。   

> 字符集（Character set）是多个字符的集合，字符集种类较多，每个字符集包含的字符个数不同。
常见字符集名称：ASCII字符集、GB2312字符集、BIG5字符集、 GB18030字符集、Unicode字符集等

> 字符集与编码
各个国家和地区所制定的不同 ANSI 编码标准中，都只规定了各自语言所需的“字符”。比如：
汉字标准（GB2312）中没有规定韩国语字符怎样存储。这些 ANSI 编码标准所规定的内容包含两层含义：
1. 使用哪些字符。也就是说哪些汉字，字母和符号会被收入标准中。所包含“字符”的集合就叫做“字符集”。
2. 规定每个“字符”分别用一个字节还是多个字节存储，用哪些字节来存储，这个规定就叫做“编码”。
各个国家和地区在制定编码标准的时候，“字符的集合”和“编码”一般都是同时制定的。因此，平常所说的“字符集”，
比如：GB2312、GBK、JIS 等，除了有“字符的集合”这层含义外，同时也包含了“编码”的含义。


字符编码：表示字符到数字的一种逻辑映射关系，每种编码方式数字与字符的对应关系并不是相同的。
码位，码点值皆表示某个字符所对应的那个数字。

ASCII编码，GB2312编码，GBK编码，Unicode 编码

ANSI编码：ANSI 是多种编码的统称，指计算机的默认编码方式 


[字符](https://baike.baidu.com/item/%E5%AD%97%E7%AC%A6%E9%9B%86?fromModule=lemma_inlink)
[标准编码格式](https://baike.baidu.com/item/%E6%A0%87%E5%87%86%E7%BC%96%E7%A0%81%E6%A0%BC%E5%BC%8F/20868617?fromModule=search-result_lemma-recommend)
[字符编码笔记：ASCII，Unicode 和 UTF-8](https://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)

## 标准编码格式

### UTF-8（Unicode Transformation Format-8bit）


### GBK
是对 GB2312的一个扩展

### GB2312
简体中文

### big5
繁体中文的big5

### ASCII 编码
ASCII 字符的计算机存储编码： 标准 ASCII 码使用 7 个二进位对字符进行编码（一个字节表示一个字符）

0~31及127（共33个）是控制字符或通信专用字符（其余为可显示字符），如控制符：LF（换行）、CR（回车）、FF（换页）、
DEL（删除）、BS（退格）、BEL（振铃）等；通信专用字符：SOH（文头）、EOT（文尾）、ACK（确认）等；ASCII值为8、9、10
和13分别转换为退格、制表、换行和回车字符。它们并没有特定的图形显示，但会依不同的应用程序而对文本显示有不同的影响。

32~126（共95个）是字符（32sp是空格），其中48~57为0到9十个阿拉伯数字，65~90为26个大写英文字母，
97~122为26个小写字母，其余为一些标点符号、运算符号等

### Unicode 编码（UCS）
Unicode的学名是"UniversalMultiple-Octet Coded Character Set"，简称为UCS。UCS可以看作是"Unicode CharacterSet"的缩写。
Unicode 只是一个符号集，它只规定了符号的二进制代码，却没有规定这个二进制代码应该如何存储

在Unicode官方资料中，Unicode字符的计算机储存编码方式有三种：UTF-8、UTF-16、UTF-32。由于UTF-8与字节序无关（无需BOM），
同时兼容ASCII编码，使得UTF-8编码成为现今互联网信息编码标准而被广泛使用。



## javascript 字符与码点的相互转换
String.prototype.codePointAt() // 获取字符的 unicode 码点值
String.fromCodePoint() // 获取 unicode 码点值对应的字符


## BOM(Byte Order Mark), BE(Big Endian), LE(Little Endian),
> BOM —— Byte Order Mark，中文名译作“字节顺序标记”，出现在文本文件头部，Unicode编码标准中用于标识文件是采用哪种格式的编码。

对于使用 unicode 编码的文件，若包含了 BOM 则可以知道改文件的编码格式。否则是无法确定改文件是使用何种格式编码的。

[字符编码笔记：ASCII，Unicode 和 UTF-8](https://www.ruanyifeng.com/blog/2007/10/ascii_unicode_and_utf-8.html)
[阮一峰：理解字节序](http://www.ruanyifeng.com/blog/2016/11/byte-order.html)


## 拓展
- 浏览器使用 UTF-16 进行字符编码，对数据的读写操作效率更高，