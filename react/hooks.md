# Hooks

## 状态相关
- useState
- useReducer
- useContext

## 副作用
- useEffect
- useLayoutEffect : 下一次重新绘制之前执行
- useInsertionEffect

## 性能相关
- useMemo
- useCallback
- useDeferredValue
- useTransition


- useImperativeHandle
```javascript
const FormComponent = forwardRef(function FormComponentImplement(props, ref) {
  useImperativeHandle(ref, () => {
    return {
      getFieldsValue()
    }
  }, [])
})
```

- useSyncExternalStore
- 使用外部 store, 订阅外部护具
```javascript
const externalStore = {
  state: {},
  listeners: [],
  subscribe(callback) {
    const index = this.listeners.push(callback) - 1
    return function unsubscribe() {
      this.listeners.split(index, 1)
    }
  },
  getState() {
    return this.state
  }
}
function Component() {
  useSyncExternalStore(externalStore.subscribe, externalStore.getState)
}
```
