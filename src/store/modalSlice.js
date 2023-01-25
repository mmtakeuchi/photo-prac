import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isOpen: false,
  image: {},
};

export const modalSlice = createSlice({
  name: 'modal',
  initialState,
  reducers: {
    open: (state, action) => {
      state.isOpen = true;
      state.image = action.payload;
    },
    close: (state) => {
      state.isOpen = false;
    },
  },
});

export const { open, close } = modalSlice.actions;

export default modalSlice.reducer;
