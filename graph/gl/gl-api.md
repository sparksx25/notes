# WebGL API

## canvas.getContext('webgl')
默认的窗口坐标根据获取 WebGlRendingContext 时  canvas 的 width, height属性决定

```javascript
// html <camvas height="300" width="400"></canvas>
const gl = canvas.getContext('webgl')
// 此时的窗口坐标范围是 x: 0, y: 0, width: 400, height: 300, 原点在页面的左下角
```

## viewport(x, y, width, height)
用来设置视口，即指定从标准设备到窗口坐标的 x、y 仿射变换。

## program
```javascript
gl.createShader()
gl.shaderSource()
gl.compileShader()
gl.getShaderParameter()
gl.createProgram()
gl.attachShader()
gl.linkProgram()
gl.getProgramParameter()
```

## buffer
```javascript
gl.createBuffer()
gl.bindBuffer()
gl.bufferData()
gl.enableVertexAttribArray()
gl.vertexAttribPoint()
```


## 纹理
```javascript
gl.createTexture()
gl.bindTexture()
gl.texImage2D()
// 创建纹理贴图（将较大的纹理缩小以至于可以放在更小的单位内）
gl.generateMipmap()
```

## 储存限定符
```javascript
gl.getAttribLocation()
gl.getUniformLocation()
gl.uniform2f()
gl.uniform2fv()
gl.uniform3f()
gl.uniform3fv()
gl.uniform4f()
gl.uniform4fv()
gl.uniform2iv()
```


## 绘制
```javascript
gl.drawArrays()
gl.drawElements()
```

## 设置
```javascript
gl.enable()
gl.clearDepth()
gl.depthFunc()
gl.clearColor()
gl.frontFace()
gl.cullFace()
```


## 获取绘制状态
```javascript
gl.getParameter(gl.CULL_FACE_MODE) === gl.FRONT_AND_BACK;
```

