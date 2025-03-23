# 翻译中需要考虑的情况

## 插值中的中英文
```js
const message = `是否${isDisable ? '启用' : '禁用'} IOT设备`
```


## 切换语言，翻译无法实时更新
```vue
<template>
    <el-tag v-for="item in tags">{{item.label}}</el-tag>
</template>
<script setup>
const tags = [
    { label: '审核成功', value: 1 },
    { label: '审核失败', value: 2 },
    { label: '审核中', value: 3 },
]
</script>
```

## 中文作为字符串常量进行比较
```vue
<template>
    <div v-if="status !== '抄送'"></div>
</template>
```

## 写在 props 中的中文, 翻译之后造成语法错误

编译示例
```vue
<!-- 源码 -->
<script setup>
const translate = (txt) => txt
defineProps({
  message: {
    type: String,
    default: "translate('中文')"
  }
})
</script>

<!-- 编译之后的产物 -->
<script>
const __sfc__ = {
    __name: 'App',
    props: {
    message: {
        type: String,
        default: "translate('中文')"
    }
    },
    setup(__props, { expose: __expose }) {
        __expose();
        //  单文件组件 setup script 中的相同内容都编译到了 setup 选项中
        const translate = (txt) => txt
        const __returned__ = { translate }
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
        return __returned__
    }
};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return null
}
__sfc__.render = render
__sfc__.__file = "src/App.vue"
export default __sfc__
</script>
```


修改方案
```vue
<script>
// 源码
function getText() {
  return 'text';
}
</script>
<script setup>

const translate = (txt) => txt
defineProps({
  message: {
    type: String,
    default: $t('')
  }
})
</script>

<!-- 编译产物 -->
<script>
function getText() {
  return 'text';
}

const __sfc__ = {
    __name: 'App',
    props: {
        message: {
            type: String,
            default: getText('消息')
        }
    },
    setup(__props, { expose: __expose }) {
        __expose();


        const translate = (txt) => txt


        const __returned__ = { getText, translate }
        Object.defineProperty(__returned__, '__isScriptSetup', { enumerable: false, value: true })
        return __returned__
    }

};
function render(_ctx, _cache, $props, $setup, $data, $options) {
  return null
}
__sfc__.render = render
__sfc__.__file = "src/App.vue"
export default __sfc__
</script>
```


## 单词的单复数
1. 1 day, 2days
