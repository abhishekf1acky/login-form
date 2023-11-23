import { configureStore } from '@reduxjs/toolkit';
import authReducer from './authSlice';
import loginFormReducer from './loginFormSlice';

const store = configureStore({
  reducer: {
    auth: authReducer,
    loginForm: loginFormReducer,
  },
});

export default store;
