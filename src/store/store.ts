import { configureStore } from "@reduxjs/toolkit";
import { usersApi } from "./services/usersApi";
import { postsApi } from "./services/postsApi";
import paginationReducer from "./slices/paginationSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    [usersApi.reducerPath]: usersApi.reducer,
    [postsApi.reducerPath]: postsApi.reducer,
    pagination: paginationReducer,
    user: userReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(usersApi.middleware, postsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
