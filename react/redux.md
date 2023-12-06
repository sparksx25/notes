# redux

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

function logStartMiddleware({ getState }) {
  return function chain(dispatch) {
    console.log('mutate start state', JSON.stringify(getState()))
    return dispatch
  }
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


/**
 * @description 
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