# 页面结构


# 撤销重做

```js
preset = 'a'
preset = 'ab'
preset = 'abc' // 当前正在输入的值...

past = ['a', 'ab', 'abc'] // 历史记录

future = [] // 未来数据的记录

// ----------- 撤销 --------------
// past 出栈(pop) , future 入栈， present重新赋值

present = 'ab'
past = ['a', 'ab']
future = ['abc']

// 再次撤销
present = 'a' 
past = ['a']
future = ['abc', 'ab']

//------------- 重做 ---------
future出栈, past入栈

present = 'ab'
future = ['abc']
past = ['a', 'ab']

// 在撤销/重做之后，手动输入数据修改present, future重置为空
```