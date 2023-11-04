# 浏览器 Buffer

## ArrayBuffer
ArrayBufer代表的是一个缓冲区，缓冲区的读写需要通过类型化数组或数据视图进行操作。
### ArrayBuffer构造函数
创建一个指定字节长度的缓冲区。

### ArrayBuffer.prototype.bytelength
返回创建缓冲区时指定的字节长度

### ArrayBuffer.prototype.slice(start, end)
从缓冲区中指定的位置中复制一份缓冲。

### ArrayBuffer.isView()
判断传入的参数是否是类型化数组对象或DataView。



## TypedArray
### Uint8Array 转 Int32Array
浏览器使用小字节序。
```javascript
var buf = new ArrayBuffer(8);
var uint8 = new Uint8Array(buf);
uint8[0] = 23;
uint8[1] = 66;
uint8[2] = 99;
uint8[3] = 100;

var int32 = new Int32Array(buf)

buf[0] // 1684226583
parseInt([toBinary(100), toBinary(99), toBinary(66), toBinary(23)].join(''), 2) === 1684226583
```

### 存储越界
越界存储，不会报错，但是会进行截取。

## DataView

