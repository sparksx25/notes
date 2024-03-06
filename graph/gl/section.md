# 功能组合

## 设置像素绘制条件
深度空间范围 [0, 1], 绘制像素时会裁剪空间空将坐标点的 z-buffer值转成[0, 1]范围的深度空间。
webgl 默认只渲深度空间小于 1.0 的像素。
[正射投影](https://webglfundamentals.org/webgl/lessons/zh_cn/webgl-3d-orthographic.html)
```javascript
// 设置像素绘制范围为 小于等于 depth 的坐标点
gl.depthFunc(gl.LEQUAL)

// 设置渲染深度空间值
gl.clearDepth(1.0) 

gl.clear(gl.DEPTH_BUFFER_BIT)

gl.getParameter(gl.DEPTH_FUNC);

```

## 设置绘制正反面
正面即物体的外表面，背面即物体内部的表面。
webgl 默认坐标点逆时针绘制时代表的是正面。
```javascript
// 启用正反面绘制
gl.enable(gl.CULL_FACE)

// 剔除背面； BACK(默认值): 剔除背面， front: 剔除正面， FRONT_AND_BACK:剔除正反面。
gl.cullFace(gl.BACK)

// 设置顺时针代表正面； CW: 顺时针表示正面， CCW(默认值)：逆时针表示正面
gl.frontFace(gl.CW)

// 获取绘制正反面状态
gl.getParameter(gl.CULL_FACE_MODE);
```

## 将数据写入缓冲区
```javascript
const location = gl.getAttribLation('a_position')
const buffer = gl.createBuffer()
gl.bindBuffer(gl.ARRAY_BUFFER, buffer);
gl.bufferData(gl.ARRAY_BUFFER, new Float32Array([]), gl.STATIC_DRAW);
gl.enableVertexAttribArray(location);
gl.vertexAttribPointer(location, 3, gl.FLOAT, 0, 0);
```


## 将纹理写入缓冲区

```javascript
const texture = gl.createTexture()
gl.bindTexture(gl.TEXTURE_2D, texture)
gl.texImage2D(gl.TEXTURE_2D, 0, gl.RGBA, 1, 1, 0, gl.RGBA, gl.UNSIGNED_BYTE, new Uint8Array([0, 0, 255, 255]));
```