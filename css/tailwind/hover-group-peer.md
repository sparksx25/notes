# 设置状态样式

## 常用的修饰符有
- sm,md,lg,xl,2xl
- dark
- hover
- disabled/invalid
- first/last
- before/after
- file: 设置文件按钮样式
- selection: 设置选中样式
- marker: 设置项目符号样式
- supports-[display:grid]:grid


## 设置伪类样式
1. hover:bg-slate-500
2. focus:
3. invalid
4. disabled
5. first:
6. last:

## 基于父元素的状态设置子元素样式
不区分分组:
  group-hover:bg-slate-500

区分分组：设定多个父元素
```
group/item
group-hover/item:bg-slate-500
```

基于任意组
```
group-[.is-active]:block
```

## 基于上一个兄弟节点状态设置样式
**注意:**需要是相邻的兄弟节点,通过`～`选择器实现。
不分区分组
```
peer
peer-invalid:visible
```

区分分组
```
peer/draft
peer-checked/draft:text-sky-500
```

任意分组
```
is-dirty
peer-[.is-dirty]:peer-required:block 
```

## 设置通用子元素样式
**注意:**需要注意的是，由于生成的子选择器的特殊性，直接在子项本身上使用实用程序覆盖样式是行不通的
```
*:border
```

## 基于子元素状态设置父元素样式
实现: 父元素设置默认 css 变量值，子元素覆盖 css 变量值
```
has-[:checked]:text-indigo-900
```

## 基于父元素的后代设置元素的样式
基于 `has` 伪类选择器实现

## 文件输入按钮
```
file:mr-4
```

## 根据 css 兼容性设置类样式
## 根据 data 属性值设置类样式