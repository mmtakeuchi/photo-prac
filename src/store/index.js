import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/dist/query';
import { imagesApi } from './imageApi';
import modalReducer from './modalSlice';

export const store = configureStore({
  reducer: {
    [imagesApi.reducerPath]: imagesApi.reducer,
    modal: modalReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(imagesApi.middleware),
});

setupListeners(store.dispatch);
