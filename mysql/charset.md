## mysql 字符集

- 字符集（character set）：定义了字符以及字符的编码。
- 字符序（collation）：定义了字符的比较规则。

## 常用的字符集
MySQL一般使用的字符集有以下几种:

1. **UTF-8**（Unicode Transformation Format-8）：
   - 特点：能够表示几乎所有世界上的文字字符，支持多语言文本。
   - 优点：国际化支持好，数据一致性高。
   - 适用场景：适合需要处理多语言数据或跨国际化应用的场景。

2. **UTF-16**：
   - 特点：使用两个或四个字节表示一个字符，适合处理较为复杂的字符集。
   - 优点：对于某些字符集（如中文、日文、韩文等），UTF-16 可能比 UTF-8 更有效率。
   - 适用场景：需要处理复杂字符集的特定场景。

3. **Latin1**（ISO 8859-1）：
   - 特点：单字节编码方式，适用于西欧语言的字符集。
   - 优点：在处理纯西欧语言的情况下，可能比 UTF-8 更节省空间和内存。
   - 适用场景：仅需处理西欧语言字符的应用场景。

4. **GBK**（GuoBiao Encoding）：
   - 特点：用于中文编码的字符集，包括简体中文和繁体中文。
   - 优点：对于中文字符的存储和处理更为高效。
   - 适用场景：需要专门处理中文字符的应用场景。

## 字符序
在 MySQL 中，`utf8mb4_0900_ai_ci`和`utf8mb4_unicode_ci`都是用于表示 UTF-8 编码的字符集，它们的区别在于使用的排序规则。

1. **utf8mb4_0900_ai_ci**：这是 MySQL 8.0 版本引入的新的排序规则，也称为 utf8mb4 ASCII 码无关不区分大小写（Accent-Insensitive, Case-Insensitive）排序规则。它提供了更准确和一致的排序规则，适用于大多数场景。
   - 特点：对于 ASCII 字符，进行大小写不敏感的比较，不考虑重音符号的差异；对于非 ASCII 字符，按照 Unicode 标准进行排序。
   - 优点：提供更好的排序结果，适用于多语言环境和国际化应用。
   - 适用场景：推荐在 MySQL 8.0 版本及以上使用。

2. **utf8mb4_unicode_ci**：这是早期的 UTF-8 字符集在 MySQL 中使用的排序规则，也称为 utf8mb4 Unicode 不区分大小写排序规则。
   - 特点：对于绝大多数字符，按照 Unicode 标准进行排序，同时也包括一些特定的排序规则。
   - 优点：适用于多语言环境和国际化应用，与旧版本的 MySQL 兼容性较好。
   - 适用场景：如果使用的是 MySQL 8.0 以下的版本，或者特定需求下需要与旧版本兼容，可以选择该排序规则。


## 查看字符集啊
- `show CHARACTER SET`: 查看当前安装的 mysql 支持的字符集
- ` show variables like '%char%'`: 查看当前系统默认的字符集设置
- `show create database db`
- `show create table tb`

## Reference
- [博客园](https://www.cnblogs.com/chyingp/p/mysql-character-set-collation.html)
- [博客](http://docs.lvrui.io/2016/08/21/%E4%BF%AE%E6%94%B9MySQL%E7%9A%84%E5%AD%97%E7%AC%A6%E9%9B%86%E4%B8%BAutf8mb4/)