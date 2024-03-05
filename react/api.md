# react api

## createContext
- 用多层级组件值的传递，避免每个层级都需要向下传递相同的 props, 类似数据注入。
- 类组件获取 context 时，`<Context.Consumer>`的子元素必须是函数。

```tsx
export const ThemeContext = createContext(null)

<ThemeContext.Provider value='initialValue'>
  <ThemeContext.Consumer>
    {
      (v) => { return <h2>{v}</h2>}
    } 
  </ThemeContext.Consumer>
</ThemeContext.Provider>
```

## forwardRef
自定义获取组件引用的返回值
```tsx
forwardRef(function From(props, ref) {
  useImperativeHandle(ref, () => {
    return {
      getFieldsValue()
    }
  }, [])
})
```

## lazy
React.lazy() 方法包装的内容可以返回一个promise对象，或类promise对象(含有then方法的对象)。
- lazy 包装的返回组件只有在需要渲染这个组件的时候才会调用，
- 包装组件返回的 promise，resolve的值将会被缓存，只会加载一次
```tsx
const MarkdownPreview = lazy(() => delayForDemo(import('./MarkdownPreview.js')));
```

## memo
- 类似于 PureComponent，通过比较更新前后 Props 是否一致，决定是要重新渲染该组件
- 缓存组件，与 vue 的 keep-alive 起相同的作用

## createPortal
自定义内容挂载位置

```tsx
function Modal(props) {
  return createPortal(
    <div>
      <h2>{{props.title}}</h2>
      <div>{{props.content}}</div>
    </div>
  ), document.body);
}
```