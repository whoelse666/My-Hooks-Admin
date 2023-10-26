import { MenuState } from "@/redux/interface";
import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'



const menuState: MenuState = {
	isCollapse: false,
	menuList: [],
};
 

export const menuSlice = createSlice({
	name: "menu",
	initialState: menuState,
  reducers: {
   		updateCollapse(state: MenuState, { payload }: PayloadAction<boolean>) {
			state.isCollapse = payload;
		},
		setMenuList(state: MenuState, { payload }: PayloadAction<Menu.MenuOptions[]>) {
			state.menuList = payload;
		}
  },
})

export const {  setMenuList, updateCollapse } = menuSlice.actions
export default menuSlice.reducer