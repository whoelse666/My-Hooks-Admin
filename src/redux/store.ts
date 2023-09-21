import { configureStore, combineReducers } from "@reduxjs/toolkit";
// import { persistStore, persistReducer } from "redux-persist";
import {  useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux";

import counterReducer from './reducers/counterSlice'
import todosReducer from './reducers/todosSlice'
import tokenReducer from './reducers/tokenSlice'


export const reducer = combineReducers({
/*  counterReducer,
 todosReducer,
  tokenReducer, */
   counter: counterReducer,
    todos: todosReducer,
    tokenStore: tokenReducer,
});
export const useSelector= useReduxSelector;
export const useDispatch = () => useReduxDispatch();

// store
export const store = configureStore({
	reducer:reducer,// persistReducerConfig,
	// middleware: middleWares,
	devTools: true
});
export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    tokenStore: tokenReducer,
  },
});
