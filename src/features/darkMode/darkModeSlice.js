import { createSlice } from "@reduxjs/toolkit";

const initialState = localStorage.getItem("darkMode")
	? JSON.parse(localStorage.getItem("darkMode"))
	: false;

export const darkModeSlice = createSlice({
	name: "darkMode",
	initialState,
	reducers: {
		changeMode(state) {
			localStorage.setItem("darkMode", !state);
			return !state;
		}
	}
});

export const { changeMode } = darkModeSlice.actions;

export default darkModeSlice.reducer;
