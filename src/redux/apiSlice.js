import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
	name: "app",
	initialState: {
		isMenuOpen: false,
		isLoading: false,
		category: "Latest",
	},
	reducers: {
		startLoading: (state) => {
			state.isLoading = true;
		},
		toggleMenu: (state) => {
			state.isMenuOpen = !state.isMenuOpen;
		},
		closeMenu: (state) => {
			state.isMenuOpen = false;
		},
	},
});

export const { toggleMenu, closeMenu, startLoading } = appSlice.actions;
export default appSlice.reducer;
