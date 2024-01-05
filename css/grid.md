# grid

[阮一峰： grid](https://www.ruanyifeng.com/blog/2019/03/grid-layout-tutorial.html)

## 容器属性
- display: 
    grid | inline-grid;

设置网格:
- grid-template-columns:      
    33.33%, 33.33%, 33.33%;
    repeat(3, 33.33%);
    repeat(auto-fill, 100px); // 每个单元格宽100px，每行尽量填充更多的格子
    repeat(auto-fit, 100px) // 则会尽量扩大单元格的宽度

- grid-template-rows: 
    repeat(2, 100px 20px 80px);
    1fr 1fr;
    1fr 1fr minmax(100px, 1fr);
    100px auto 100px;

设置超出的网格大小
- grid-auto-rows: 50px; 
- grid-auto-columns: 50px; 


定义区域: 
 - grid-template-areas:   
    'a b c'
    'd e f'
    'g h i';

    "header header header"
    ". main sidebar"
    "footer footer footer";

设置单元格之间的间距
- gap
- row-gap
- column-gap
- grid-gap: 20px 20px;
- grid-row-gap: 20px;
- grid-column-gap: 20px;

设置单元格排版方向
- grid-auto-flow:
    column;
    row dense;

设置项目在网格中的对齐方式：
- place-items: align-items justify-items;
- justify-items: start | end | center | stretch;
- align-items: start | end | center | stretch;

设置整体内容对齐：
- place-content: align-content justify-content;
- justify-content: start | end | center | stretch | space-around | space-between | space-evenly;
- align-content: start | end | center | stretch | space-around | space-between | space-evenly;

## 项目属性
设置单元格合并：
- grid-column-start属性：左边框所在的垂直网格线
- grid-column-end属性：右边框所在的垂直网格线
- grid-row-start属性：上边框所在的水平网格线
- grid-row-end属性：下边框所在的水平网格线
- grid-column: start-line / end-line;
- grid-row: start-line / end-line;
- grid-column-start: 2;
- grid-column-end: 4;

指定项目放置在哪个区域
- grid-area


单元格对齐：
- justify-self: start | end | center | stretch;
- align-self: start | end | center | stretch;
- place-self: align-self justify-self;

