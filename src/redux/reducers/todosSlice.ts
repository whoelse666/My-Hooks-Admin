import { createSlice } from '@reduxjs/toolkit'

const todosSlice = createSlice({
  name: 'todos',
  initialState: [{
        id: 1,
        text: '天外来物',
        completed: false
      }],
  reducers: {
    todoAdded(state:any, action) {
      state.push({
        id: action.payload.id,
        text: action.payload.text,
        completed: false
      })
    },
    todoToggled(state, action) {
      console.log('todoToggled-num',action.payload)
      const todo = state.find(todo => todo.id === action.payload) || <any>{}
      todo.completed = !todo.completed
    }
  }
})
export const selectTodos = (state) => state.todos
export const { todoAdded, todoToggled } = todosSlice.actions
export default todosSlice.reducer