import { createSlice } from "@reduxjs/toolkit";

const CreateSlice = createSlice({
  name: "cart",

  initialState: {
    cart: [],
  },

  reducers: {
    addToCart: (state, action) => {
      state.cart.push(action.payload);
    },

    removeFormCart: (state, action) => {
      state.cart = state.cart.filter((item) => item.id === action.payload.id);
    },
  },
});

export const { addToCart, removeFormCart } = CreateSlice.actions;

export default CreateSlice.reducer;