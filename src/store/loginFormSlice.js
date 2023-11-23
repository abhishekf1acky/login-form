import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  username: 'kminchelle',
  password: '0lelplR',
  rememberMe: false,
};

const loginFormSlice = createSlice({
  name: 'loginForm',
  initialState,
  reducers: {
    setUsername: (state, action) => {
      state.username = action.payload;
    },
    setPassword: (state, action) => {
      state.password = action.payload;
    },
    setRememberMe: (state, action) => {
      state.rememberMe = action.payload;
    },

    resetLoginForm: () => initialState,
  },
});

export const { setUsername, setPassword, setRememberMe, resetLoginForm } =
  loginFormSlice.actions;

export default loginFormSlice.reducer;
