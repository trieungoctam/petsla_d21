import { createSlice } from "@reduxjs/toolkit";

const cartSlicer = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalTypeProductInCart: 0,
  },

  reducers: {
    addToCart(state, action) {
      const payload = action.payload;
      console.log(payload);
      const existingProduct = state.cart.find(item => item.id === payload.id);
      console.log(state.cart);

      if (existingProduct != null) {
        let getIndex = state.cart.findIndex((product) => product.id === existingProduct.id);
        let getProduct = state.cart.find((product) => product.id === existingProduct.id);
        let updatedQuantity = getProduct.quantity + 1;
        state.cart[getIndex] = {
          ...getProduct,
          quantity: updatedQuantity,
        };
      } else {
        state.totalTypeProductInCart += 1;
        state.cart.push({
          ...payload
        })
      }
      console.log(state.totalTypeProductInCart);
    }
  }
})

export const cartActions = cartSlicer.actions;
export default cartSlicer.reducer;