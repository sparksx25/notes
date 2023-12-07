# redux 源码阅读

## store
```javascript
interface store = {
  subscribe: (listener: Function) => () => {},
  getState: any,
  dispatch: (action: Action) => void
}
```

## API
```javascript
export {
  createStore, 
  applyMiddleware, 
  combineReducers,
  compose
}
```


## applyMiddleware
- applyMiddleware 中间件的执行顺序是从右往左执行

```javascript
function middleware({ getState }) {
  // 第一个中间件的 chain 函数接收的是 store.dispatch 方法作为参数
  // 后续中间件接收上一个 chain 的执行结果作为参数
  // 最后一个中间件需要返回最终的 dispatch 函数
  return function chain(preChainRes) {
    return function finalDispatch() {

    }
  }
}
applyMiddleware(middleware)
```


## 各API使用实例

```javascript
import { createStore, applyMiddleware, combineReducers } from 'redux';

function appReducere(state, action) {
  switch (action.type) {
    case 'SET_VERSION':
      return {
        ...state,
        version: action.payload
      }
    default: 
      return { version: 0 }
  }
}

function userReduceer(state, action) {
  switch (action.type) {
    case 'SET_ID':
      return {
        ...state,
        id: action.payload
      }
    default: 
      return { id: null }
  }
}

const rootReducer = combineReducers({
  app: appReducere,
  user: userReduceer
})

const initialState = {
  app: { version: 'init'},
  user: {id: 'init'}
}

/**
 * @param {function[]} funcs 
 * @returns {function}
*/
function compose(...funcs) {
  if (funcs.length === 0) {
    return (arg) => arg
  }

  if (funcs.length === 1) {
    return funcs[0]
  }

  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  )
}

function logStartMiddleware({ getState }) {
  return function chain(dispatch) {
    console.log('mutate start state', JSON.stringify(getState()))
    return dispatch
  }
}

/**
 * @description
 * 异步中间件的实现
 * store.dispatch 方法具体接收什么参数，由最后一个执行的中间件决定
 * 中间件的执行顺序是从右往左执行
 * store.dispatch = compose(middlewares.map(middleware => middleware({getState})))(store.dispatch)
*/
function reduxThunkMiddle({ getState }) {
  return function chain(dispatch) {
    return function next(action) {
      if (typeof action === 'function') {
        return action(dispatch, getState)
      }
      return dispatch(action)
    }
  }
}

export const store = applyMiddleware(reduxThunkMiddle, logStartMiddleware)(createStore)(rootReducer, initialState)

store.dispatch(function(dispatch, getState) {
  setTimeout(() => {
    dispatch({ type: 'SET_VERSION', payload: '2.0'})
    console.log(getState())
  }, 4000)
})
```