# WebGl

## 概念
### WebGL
1. WebGL在电脑的GPU中运行

### 着色程序
WebGL 应用会有多个着色程序。每个着色程序都有一个顶点着色器和一个片段着色器

### 顶点着色器
顶点着色器的作用是提供裁剪空间坐标，每个像素点都会调用顶点着色器计算裁剪空间坐标

### 片段着色器
一个片段着色器的工作是为当前光栅化的像素提供颜色值

## 着色器获取数据的四种方法

### 属性和缓冲(Attributes)
属性用来指明怎么从缓冲中获取所需数据并将它提供给顶点着色器

### 全局变量(Uniforms)

### 纹理(Textures)
WebGL的纹理坐标范围是 0.0 到 1.0 

### 可变量(Varyings)
可以通过可变量将数据从顶点着色器传递给片段着色器


## 坐标系
裁剪空间坐标：左手坐标系，大拇指指向x轴正半轴，食指指向y轴整半轴，中指指向z轴正半轴。范围[-1, 1]
视口空间坐标： 左下角位原点，水平向右位x正半轴，垂直向上位 y轴正半轴。
纹理坐标：以物体左下角为原点，水平向右为x轴正半轴，竖直向上为y轴正半轴。范围[0, 1]
屏幕空间坐标(画布像素坐标，页面坐标): 以页面左上角为原点，水平向右为x轴正半轴，竖直向下为y轴正半轴。

### 视口坐标转裁剪空间坐标
视口坐标(x, y)
1. 坐标范围转成 0 -> 1, (x1 = x / 视口的宽度, y1= y / 视口的高度)
2. 坐标范围转成 0 -> 2, (x2 = x1 * 2, y2 = y2 * 2)
3. 坐标范围转成 -1 -> 1, (x2 - 1, y2 -1)


## 三维投影
开启 gl.CULL_FACE 只绘制正面，gl.DEPTH_TEST 设置深度缓存

正射投影：以固定的角度与距离观察物体

透视投影（远小近大）：从不同的角度，距离观察物体
    1. m4.perspective 默认将相机放在了原点(0, 0, 0)并且视锥的范围是 -zNear 到 -zFar。相机的朝向是从+Z轴朝向-Z轴方向


## 颜色空间和裁剪空间的范围
颜色空间值的范围在 [0, 1]之间, 裁剪空间的范文在 [-1, 1]之间


## GLSL
WebGL的 vec.xyz 会默认除 w

### 全局变量
gl_Position：设置顶点着色器位置
gl_PointSize: 设置顶点着色器像素大小
gl_FragColor: 设置着色器颜色

## 参考地址
[MDN 旧版](http://mdn.asprain.cn/docs/web/api/webglrenderingcontext)
[webgl 图形化入门](https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-fundamentals.html)
[webgl API 参考卡片](https://www.khronos.org/files/webgl/webgl-reference-card-1_0.pdf)
[webgl 个人笔记](http://docs.webgl.yunfei.ltd/)
[OpenGL](http://www.songho.ca/opengl/gl_projectionmatrix_mathml.html)
[OpenGL](https://ogldev.org/)

