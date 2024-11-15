import { configureStore } from "@reduxjs/toolkit";

import paginateSlice from "./paginate/slice";

export const store = configureStore({
	reducer: {
		paginate: paginateSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
