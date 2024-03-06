# 注意点

## viewport
视口空间的大小取决于
1. 获取 context 时 canvas 的 width, height 属性值大小
2. 通过 gl.viewport 设置视口的大小。

## 裁剪空间坐标系
裁剪空间坐标系是左手坐标系，z轴正半轴指向屏幕内部。

## 矩阵
1. WebGL 中对坐标点应用矩阵，注意书写位置，矩阵与坐标点的顺序不一样所表达的含义不一样。
2. multiplyArrayOfMatrices 方法, 进行多次变换时，变换的顺序与索引相反，索引越大的矩阵优先进行变换。
```javascript
MDN.multiplyArrayOfMatrices = function (matrices) {

  var inputMatrix = matrices[0];

  for (var i = 1; i < matrices.length; i++) {
    inputMatrix = MDN.multiplyMatrices(inputMatrix, matrices[i]);
  }

  return inputMatrix;
}
```


## 旋转变换
裁剪空间中 绕 x, y, z 轴旋转，视角从正半轴看向负半轴，逆时针旋转角度为正。
由于 Z+ 指向屏幕内部，所以顺时针旋转时角度为正。

