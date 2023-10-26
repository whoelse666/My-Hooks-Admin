import { configureStore } from "@reduxjs/toolkit";

import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux";

import counterReducer from './modules/counterSlice'
import todosReducer from './modules/todosSlice'
import tokenReducer from './modules/tokenSlice'
import menuReducer from "./modules/menuSlice";



export const store = configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    tokenStore: tokenReducer,
    menu: menuReducer,
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<AppDispatch>(); 