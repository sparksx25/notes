<template>
  <div class="mim-fitted-box">
    <div class="mim-fitted-box__content" ref="contentRef" :style="style">
      <slot><div class="mim-fitted-box__slot">{{content}}</div></slot>
    </div>
  </div>
</template>
<script setup>
const props = defineProps({
  content: {
    type: String,
    default: ''
  }
})

/**
 * @description 测量元素尺寸
 * @param {HTMLElement} element
 * @returns {width: number}
*/
function measureElement(element) {
  const cloneEl = element.cloneNode(true)
  const boxEl = document.createElement('DIV')
  boxEl.setAttribute('style', 'position: fixed; left: -100000000px; overflow: hidden;')
  boxEl.appendChild(cloneEl)
  document.body.appendChild(boxEl)
  const width = cloneEl.offsetWidth
  document.body.removeChild(boxEl)
  return {
    width
  }
}

const state = reactive({
  scale: 1,
  width: 'auto'
})

const style = computed(() => {
  return [`transform: scale(${state.scale})`, `min-width: ${state.width}`].join(';')
})

const contentRef = ref()
const update = () => {
  /** @type { HTMLDivElement } */
  const contentEl = contentRef.value
  const boxEl = contentEl.parentElement
  const boxWidth = boxEl.offsetWidth
  const contentWidth = measureElement(contentEl).width

  // 计算精度差
  state.width = `${contentWidth + 1}px`
  if (contentWidth > boxWidth) {
    state.scale = boxWidth / contentWidth
  } else {
    state.scale = 1
  }
}

watch(
  () => props.content,
  update
)

onMounted(() => {
  update()
})
</script>
<style lang="scss" scoped>
.mim {
  &-fitted-box {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
  }
  &-fitted-box__content {
  }
  &-fitted-box__slot {
    word-break: keep-all;
    white-space: nowrap;
  }
}
</style>
