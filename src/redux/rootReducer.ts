import { ADD_TODO, DELETE_TODO, TOGGLE_TODO } from '../actions';

// 定义初始状态
const initialState = [];

// 定义reducer函数
const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return [...state, action.payload];
    case DELETE_TODO:
      return state.filter(todo => todo.id !== action.payload.id);
    case TOGGLE_TODO:
      return state.map(todo => {
        if (todo.id === action.payload.id) {
          return { ...todo, completed: !todo.completed };
        }
        return todo;
      });
    default:
      return state;
  }
};

export default todoReducer;


