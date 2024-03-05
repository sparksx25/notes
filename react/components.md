# React Components

## Fragment

## StrictMode
该组件在开发环境使用，每次响应数据变更时会执行两次 `render` 函数，目的为了检查每次 hooks 执行的顺序是否一致。
```jsx
  <React.StrictMode>
    <App />
  </React.StrictMode>
```

## Suspend
只有启用了 Suspense 的数据源才会激活 Suspense 组件,包括：
- 使用 React.lazy 包装的组件
- 返回 Promise 的组件
- Relay and Next.js框架

```tsx
  <Suspense fallback={<Loading />}>
    <h2>Preview</h2>
    <MarkdownPreview markdown={markdown} />
  </Suspense>
```


## Profiler
性能报告