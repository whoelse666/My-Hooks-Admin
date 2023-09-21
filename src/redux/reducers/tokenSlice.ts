
import { createSlice } from '@reduxjs/toolkit'

const tokenSlice = createSlice({
  name: 'tokenStore',
  initialState: { token: sessionStorage.getItem('token')||null },
  reducers: {
    setToken: (state, action) => {
      const token = action.payload
      sessionStorage.setItem(token.key || 'token', token.value)
      state.token = token.value?token.value:null;
    },
    getToken: (state, action) : any => {
      const tokenKey = action.payload;
      return   sessionStorage.getItem(tokenKey) 
    },
    removeToken: (state, action) => {
      const tokenKey = action.payload;
      sessionStorage.removeItem(tokenKey)
      state.token =  null

    },
    clearToken: (state) => {
      sessionStorage.clearItem()
        state.token =  null
    },
  }
})

export const selectToken = (state:{tokenStore:{token:string}}) => {
   return state.tokenStore.token
}

export const { setToken, getToken, removeToken, clearToken } = tokenSlice.actions
export default tokenSlice.reducer
