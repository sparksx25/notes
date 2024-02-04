```bash
# 将当前文件夹下面以 .js,.vue,.css,.scss,.less 结尾的文件的换行符替换为 LF
find ./ -type f \( -name "*.js" -o -name "*.vue" -o -name "*.css" -o -name "*.scss" -o -name "*.less" -o -name "*.html" \) -exec perl -pi -e 's/\r\n|\r/\n/g' {} +
```