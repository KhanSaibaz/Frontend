import { configureStore } from '@reduxjs/toolkit';
import BaseApi from '../baseQuery/BaseApi';
import counterSlice from '../slices/countersilces';
import authReducer from '../slices/authSlice';

export const store = configureStore({
    reducer: {
      [BaseApi.reducerPath]: BaseApi.reducer,  // Reducer for API requests
      counter: counterSlice, 
      auth: authReducer,
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(BaseApi.middleware),
});

export default store;
