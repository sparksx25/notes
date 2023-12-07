# react-redux 源码阅读

## API
```javascript
export {
  Provider,
  ReduxContext,
  // 提供给类组件使用
  connect,
  useDispatch,
  useSelector,
  useStore
}
```

## 实现介绍
- react-redux 也实现了一个自定义发布订阅模式(不过使用链表存储订阅者)。react-redux 通过 redux 的 subscribe 方法添加了一个订阅者。
当 redux 发生变更通知订阅者时， react-redux 调用自身的 notify 方法。

- 对于组件的更新， react-redux 使用了 `useSyncExternalStore`。`useSyncExternalStore` 收到发布者的变更消息会重新向发布者获取最新状态，
状态变更，重新执行渲染

## Provider
```javascript
function Provider<A extends Action<string> = UnknownAction, S = unknown>({
  store,
  context,
  children,
}: ProviderProps<A, S>) {
  const contextValue = React.useMemo(() => {
    // 生成订阅
    const subscription = createSubscription(store)
    return {
      store,
      subscription,
    }
  }, [store])

  const previousState = React.useMemo(() => store.getState(), [store])

  useIsomorphicLayoutEffect(() => {
    const { subscription } = contextValue
    // 当收到 store 的变更消息时，通知订阅者
    subscription.onStateChange = subscription.notifyNestedSubs
    subscription.trySubscribe()

    if (previousState !== store.getState()) {
      subscription.notifyNestedSubs()
    }
    return () => {
      subscription.tryUnsubscribe()
      subscription.onStateChange = undefined
    }
  }, [contextValue, previousState])

  const Context = context || ReactReduxContext

  return <Context.Provider value={contextValue}>{children}</Context.Provider>
}
```

## useSelector
```javascript
function useSelector(selector) {
  return selector(store.getState())
}
```

## useDispatch
```javascript
function useDispatch() {
  const store = useStore()
  return store.dispatch
}
```