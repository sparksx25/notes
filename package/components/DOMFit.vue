<style lang="scss" scoped>
.bw {
  &-fit-container {
    position: relative;
    height: 100%;
    width: 100%;
    overflow: hidden;
  }

  &-fit-content {
    display: inline-block;
    width: 1920px;
    height: 1080px;
    transform-origin: 0 0;
  }
}
</style>
<template>
  <div class="bw-fit-container" ref="containerRef">
    <div class="bw-fit-content" :style="style">
      <slot></slot>
    </div>
  </div>
</template>
<script setup>
import { onMounted } from 'vue';
import { ref } from 'vue';
import { onBeforeUnmount } from 'vue';

/**
 * @typedef Size
 * @prop {number} width
 * @prop {number} height
 */

/**
 * @param {Size} containerSize
 * @param {Size} contentSize
 */
function objectFitContain(containerSize, contentSize) {
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

const style = ref();
const contentSize = { height: 1080, width: 1920 };

const updateStyle = res => {
  style.value = {
    'margin-left': `${res.padLeft}px`,
    'margin-top': `${res.padTop}px`,
    transform: `scale(${res.zoom})`,
  };
};
const initZoom = () => {
  const res = objectFitContain(
    {
      height: window.innerHeight,
      width: window.innerWidth,
    },
    contentSize
  );
  updateStyle(res);
};

const containerRef = ref();
const resizeObserver = new ResizeObserver(() => {
  const element = containerRef.value;
  const res = objectFitContain(
    {
      width: element.offsetWidth,
      height: element.offsetHeight,
    },
    contentSize
  );
  updateStyle(res);
});

initZoom();
onMounted(() => {
  resizeObserver.observe(containerRef.value, { box: 'border-box' });
});
onBeforeUnmount(() => {
  resizeObserver.disconnect();
});
</script>
