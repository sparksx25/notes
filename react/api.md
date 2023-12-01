# react api

## createContext
- 用多层级组件值的传递，避免每个层级都需要向下传递相同的 props, 类似数据注入。
- `<Context.Consumer>`的子元素必须是函数。

```jsx
export const Context = createContext(null)

<Context.Provider value='initialValue'>
  <Context.Consumer>
    {
      (v) => { return <h2>{v}</h2>}
    } 
  </Context.Consumer>
</Context.Provider>
```


## React.memo
- 缓存组件，与 vue 的 keep-alive 起相同的作用