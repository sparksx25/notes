# FAQ

# mask
- mask 元素盖住的部分将应用效果，未盖住的部分将呈现透明效果，即不可见。
- mask 元素默认是根据亮度(mask-mode: match-source)来呈现效果,越亮(#fff)表示可见度越低,越黑(#000)表示可见度月底
- 修改 mask 的 maskUnits 属性可修复该问题  userSpaceOnUse | objectBoundingBox(默认值);
- [github: 将 mask 应用于水平|垂直直线存在的问题](https://github.com/matplotlib/matplotlib/issues/2124)
- [chromium: 将 mask 应用于水平|垂直直线存在的问题](https://issues.chromium.org/issues/41229159#comment12)
```html
  <svg width="200" height="200">
      <mask id="line-mask">
        <rect x="0" y="0" width="100" height="100" fill="gray" />
      </mask>
      <line x1="50" y1="50" x2="150" y2="51" stroke="black" stroke-width="2" mask="url(#line-mask)" />
  </svg>
```