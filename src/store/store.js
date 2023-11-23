import { configureStore } from '@reduxjs/toolkit';
import authSliceReducer from './authSlice';
import formSliceReducer from './formSlice';

export const store = configureStore({
  reducer: {
    auth: authSliceReducer,
    form: formSliceReducer,
  },
});
