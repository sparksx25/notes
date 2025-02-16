/**
 * @typedef Size
 * @prop {number} width
 * @prop {number} height
 */

/**
 * @param {Size} containerSize
 * @param {Size} contentSize
 */
export function objectFitContain(containerSize, contentSize) {
  let widthZooom = 1;
  let heightZoom = 1;
  if (contentSize.width > containerSize.width) {
    widthZooom = containerSize.width / contentSize.width;
  }
  if (contentSize.height > containerSize.height) {
    heightZoom = containerSize.height / contentSize.height;
  }
  const zoom = Math.min(widthZooom, heightZoom);
  const width = parseInt(contentSize.width * zoom);
  const height = parseInt(contentSize.height * zoom);
  const padLeft = parseInt((containerSize.width - width) / 2);
  const padTop = parseInt((containerSize.height - height) / 2);
  return {
    zoom,
    padLeft,
    padTop,
  };
}
```

1. transform: scale() 属性是将元素的 border-box 进行缩放，对于外边距是不会进行缩放的
2. transform-origin，设置元素的变换中心，默认是元素的中心点位置。
3. transform: scale 变换之后，元素所占的空间大小还是存在的,所以存在原本存在滚动条缩小之后滚动条还是存在的
4. transform: scale 变换之后，元素的 offsetWidth, offsetHeight 值还是元素的实际大小。getBoundingClientRect() 方法获取的是元素变换之后的尺寸


```js
/**
 * 获取 ResizeObserver 回调函数中，监听元素新盒子尺寸的大小
 * @param {ResizeObserverEntry } entry
 */
export function getObserverEntry(entry, box = 'border-box') {
  const boxSize = box === 'border-box' ? entry.borderBoxSize : entry.contentBoxSize;
  if (boxSize) {
    // css 设置了多列（column）的元素,是可以分多列显示的
    // 因此存在多个尺寸
    const item = Array.isArray(boxSize) ? boxSize[0] : boxSize;
    return {
      width: item.inlineSize,
      height: item.blockSize,
    };
  }
  // contentRect 是遗留属性，后续可能会被浏览器移除
  return {
    width: entry.contentRect.width,
    height: entry.contentRect.height,
  };
}