# 图表如何做自适应

## 背景介绍
在使用 `echarts` 开发图表时，当图表容器的尺寸发生变化时，图表是不会自动重新渲染以适应容器的，所以会存在图表溢出或显示不全的问题。
如果图表容器的尺寸是使用固定单位（如px）设置的那不会存在这个问题。如果容器尺寸不是使用固定单位设置的，那在图表容器发生变化时如何调整图表尺寸大小呢？


## ResizeObserver
该 API 可以监听指定 DOM 元素的尺寸变化，并以回调的方式通知尺寸变更。通过该 API，可以在图表容器尺寸发生变化时，重新执行图表的 `resize()` 方法。

## Vue 中使用
在 Vue 项目中，最简便的使用方式是以自定义指令的方式，监听元素尺寸变化的**通用实现**与使用方式如下:

v-resize.js
```js
export const vResize = {
  mounted(el, binding) {
    const observer = new ResizeObserver(() => {
      const listener = binding.value;
      if (typeof listener === 'function') {
        listener();
      }
    });
    observer.observe(el);
    el.__observer__ = observer;
  },
  beforeUnmount(el) {
    const observer = el.__observer__;
    if (observer) {
      observer.disconnect();
      el.__observer__ = null;
    }
  },
};
```

lin-chart.js
```html
<template>
  <div class="bw-chart" ref="chartRef" v-resize="onResize"></div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts/core';

// 注意引入的自定义指令一定是要以 v开头
import { vResize } from './v-resize.js';

/** 其他 echarts 组件的引用*/

const chartRef = ref();
let chartInstance = null;
onMounted(() => {
  chartInstance = echarts.init(chartRef.value);
  chartInstance.setOption(chartOption);
});

const onResize = () => {
  chartInstance.resize();
};

```


## 对图表中使用进行定制
v-chart-resize.js
```js
import { getInstanceByDom } from 'echarts/core';
import { throttle } from 'lodash-es';

export const vChartResize = {
  mounted(el) {
    // 获取节流时间
    let delay = Number(el.getAttribute('chart-throttle'));
    delay = Number.isNaN(delay) ? 100 : delay;

    let chartInstance;

    const callback = throttle(
      () => {
        if (!chartInstance) {
          chartInstance = getInstanceByDom(el);
        }
        chartInstance && chartInstance.resize();
      },
      delay,
      { trailing: true }
    );
    const observer = new ResizeObserver(callback);
    observer.observe(el);
    el.__observer__ = observer;
  },
  beforeUnmount(el) {
    const observer = el.__observer__;
    if (observer) {
      observer.disconnect();
      el.__observer__ = null;
    }
  },
};
```

lin-chart.js
```html
<template>
  <div class="bw-chart" ref="chartRef" v-chart-resize chart-throttle="200"></div>
</template>
<script setup>
import { onMounted, ref } from 'vue';
import * as echarts from 'echarts/core';

// 注意引入的自定义指令一定是要以 v开头
import { vChartResize } from './v-chart-resize.js';

/** 其他 echarts 组件的引用*/

const chartRef = ref();
let chartInstance = null;
onMounted(() => {
  chartInstance = echarts.init(chartRef.value);
  chartInstance.setOption(chartOption);
});

```


## 参考
- [MDN: ResizeObserver](https://developer.mozilla.org/zh-CN/docs/Web/API/ResizeObserver)