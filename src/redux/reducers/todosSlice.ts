import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  status: 'idle',
  list: [{
        id: 1,
        text: '天外来物',
        completed: false
      }],
}
const todosSlice = createSlice({
  /* 
  name：一个字符串，将用作生成的 action types 的前缀
initialState：reducer 的初始 state
reducers：一个对象，其中键是字符串，值是处理特定 actions 的 “case reducer” 函数
  */
  name: 'todos',
  initialState ,
  reducers: {
    todoAdded(state:any, action) {
      const todo = action.payload
      /* 
    todo=  {
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      }
      */
      state.list.push(todo)
    
    },
    todoToggled(state, action) {
      console.log('todoToggled-num', action.payload);
      const todo = state.list.find(todo => todo.id === action.payload) || <any>{}
      todo.completed = !todo.completed
    }
  }
})
export const selectTodos = (state) => state.todos.list
export const { todoAdded, todoToggled } = todosSlice.actions;
console.log(todoToggled(2))
// {type: 'todos/todoToggled', payload: 42}
export default todosSlice.reducer