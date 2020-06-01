## React 学习 demo

- redux + redux-thunk + antd 实现的版本( 含注释 & 笔记 ) 在分支: refactor-AntDesign-Redux-thunk-TodoList

  ```git
    git checkout refactor-AntDesign-Redux-thunk-TodoList
  ```

- redux + redux-saga + antd 实现的版本( 含注释 & 笔记 ) 在分支: refactor-AntDesign-Redux-saga-TodoList

  ```git
    git checkout refactor-AntDesign-Redux-saga-TodoList
  ```

- React 性能优化

  - 处理函数中的this指向时，函数绑作用域只在constructor中集中处理一次

  - setState采用异步更新渲染的回调写法，短时间内的多次setState会被自动合并，降低虚拟DOM的比对频率

  - 借助 shouldComponentUpdate 避免子组件的无谓更新

- 本demo编写时的注意事项

  - @src/Todolist.js: setState被调用的环境中注意缓存 e.target.value，否则取不到其值，报错

  - @src/index.js: 严格模式下一些钩子在dev环境下会执行两遍，参考文档

    - https://reactjs.org/docs/strict-mode.html#detecting-unexpected-side-effects
