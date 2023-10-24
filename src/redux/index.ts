import { configureStore, combineReducers } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import { TypedUseSelectorHook, useDispatch as useReduxDispatch, useSelector as useReduxSelector } from "react-redux";

import reduxThunk from "redux-thunk";
import reduxPromise from "redux-promise";
import storage from "redux-persist/lib/storage";


import counterReducer from './reducers/counterSlice'
import todosReducer from './reducers/todosSlice'
import tokenReducer from './reducers/tokenSlice'
import menu from "./modules/menu";

 
export const reducer = combineReducers({
/*  counterReducer,
 todosReducer,
  tokenReducer, */
   counter: counterReducer,
    todos: todosReducer,
    tokenStore: tokenReducer,
    menu
});

// redux persist
const persistConfig = {
	key: "redux-state",
	storage: storage
};
const persistReducerConfig = persistReducer(persistConfig, reducer);

// redux middleWares
const middleWares = [reduxThunk, reduxPromise];


// store
export const store = configureStore({
	// reducer:reducer,
	reducer:persistReducerConfig,
	middleware: middleWares,
	devTools: true
});

export const persistor = persistStore(store);
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useSelector: TypedUseSelectorHook<RootState> = useReduxSelector;
export const useDispatch = () => useReduxDispatch<AppDispatch>();

/* export default configureStore({
  reducer: {
    counter: counterReducer,
    todos: todosReducer,
    tokenStore: tokenReducer,
  },
});
 */