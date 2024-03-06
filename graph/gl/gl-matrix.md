# 矩阵

## 矩阵书写
由于 OPEN GLSL 读取缓存中矩阵元素的顺序的原因。OPEN GLSL 中的矩阵竖向代表行，横向代表列。
如平移矩阵, tx, ty, 分别代表 x,y 轴的平移量
```javascript
[
    1,  0,  0,
    0,  1,  0,
    tx, ty, 1,
]
```

## 正投影
原点在左上角，x+向右，y+向下，z+向屏幕外部, 由于z轴进行了翻转，所以默认顺时针三角形显示。

```javascript
    function orthographic(left, right, bottom, top, near, far) {
        return [
            2 / (right - left),                      0,                 0,              0,
            0,                      2 / (top - bottom),                 0,              0,
            0,                                       0,  2 / (near - far),              0,
        
            (left + right) / (left - right), (bottom + top) / (bottom - top), (near + far) / (near - far), 1,
        ];
    },

    function projection(width, height, depth) {
        // Note: This matrix flips the Y axis so 0 is at the top.
        return [
            2 / width, 0, 0, 0,
            0, -2 / height, 0, 0,
            0, 0, 2 / depth, 0,
            -1, 1, 0, 1,
        ];
    }
```