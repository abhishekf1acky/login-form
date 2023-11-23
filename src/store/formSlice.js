import { createSlice } from '@reduxjs/toolkit';

const formSlice = createSlice({
  name: 'form',
  initialState: {
    username: 'kminchelle',
    password: '0lelplR',
    rememberMe: false,
  },
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
  },
});

export const { setUsername, setPassword, setRememberMe } = formSlice.actions;
export default formSlice.reducer;
