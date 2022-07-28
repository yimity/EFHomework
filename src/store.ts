import { configureStore } from '@reduxjs/toolkit';
import { serviceApi } from './utils/service-api';

export const store = configureStore({
  reducer: {
    [serviceApi.reducerPath]: serviceApi.reducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(serviceApi.middleware),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
