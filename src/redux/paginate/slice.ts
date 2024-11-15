import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface paginateState {
	pagesCount: number;
	selectPage: number;
}

const initialState: paginateState = {
	pagesCount: 1,
	selectPage: 1,
};

export const paginateSlice = createSlice({
	name: "paginate",
	initialState,
	reducers: {
		setPagesCount: (state, action: PayloadAction<number>) => {
			state.pagesCount = action.payload;
		},

		setSelectPage: (state, action: PayloadAction<number>) => {
			state.selectPage = action.payload;
		},
	},
});

export const { setPagesCount, setSelectPage } = paginateSlice.actions;

export default paginateSlice.reducer;
