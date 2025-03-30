# Vue 中的易错点

## defineModel
defineModel 是 defineProps 与 onUpdate:model-value 结合的一个语法糖。
props 属性是只读的，所以对 props 赋值不会成功。声名 const model = defineModel()。
对 model.value 的赋值会触发 onUpdate:model-value 事件，但对 model.value 所赋予的值只有
在下一次更新以后才能读取到。

```vue
<template>
  <cus-checkbox v-model="selected" @change="onChange">
</template>
<script setup>
// parent.vue
import { ref } from 'vue';
const selected = ref(false);
const onChange = (value) => {
  console.log(value, selected.value); // false, true
};
</script>
```

```vue
<template>
  <div @click="onToggle"></div>
</template>
<script setup>
// cus-checkbox.vue
const emits = defineEmits(['change']);
const checked = defineModel({type: Boolean, default: false });
const onToggle = (value) => {
  const val = !checked.value; // val: true, checked.value: false

  // 父组件中绑定的 selected 值变为 true, 但是当前组件的 checked.value依旧为 false.
  checked.value = val; // checked.value: false,

  emits('change', checked.value);
};
</script>
```