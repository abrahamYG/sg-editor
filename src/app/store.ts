import { configureStore } from "@reduxjs/toolkit";
import functionDefSliceReducer from "../features/functionDef/functionDefSlice";

export const store = configureStore({
	reducer: {
		functionDef: functionDefSliceReducer,
	},
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
