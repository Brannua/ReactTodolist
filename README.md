# 学习使用 Antd & Redux & Redux-thunk 重构 Todolist

- store 是唯一的

- 只有 store 能够改变自己的内容

- Reducer 必须是纯函数

### 核心API

- createStore

- store.getState

- store.dispatch

- store.subscribe

### Redux-thunk

- 集成redux-thunk中间件后:

  - 1、actionCreator 的返回值就不仅可以是对象了，还可以是函数

  - 2、我们可以将 [异步代码( 比如发送ajax请求 ), 逻辑复杂的代码] 拆分到该函数中

    - 2-1、便于代码的扩展和维护

    - 2-2、便于代码的自动化测试

  - 3、redux-thunk中间件会在你手动触发dispatch(func)的时候自动执行func，且func的第一个默认参数为dispatch方法
