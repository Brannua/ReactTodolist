## React 学习 demo

- 关于事件处理函数的this指向问题
  - 如果需要给函数绑作用域则全部在constructor中处理
  - 这样性能更优

- setState变成回调形式的异步写法性能更优
  - 其回调函数中接收prevState，应合理使用prevState
  - 注意e.target使用时要在外部缓存其值
