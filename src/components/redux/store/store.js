import { configureStore } from '@reduxjs/toolkit'
import BaseApi from '../baseQuery/BaseApi'
import counterSlice from '../slices/countersilces';

export const store = configureStore({
    reducer: {
      [BaseApi.reducerPath]: BaseApi.reducer,   // these one is for api 
      counter: counterSlice,  // thes one is without api
    },
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(BaseApi.middleware),
  });
  
  export default store;