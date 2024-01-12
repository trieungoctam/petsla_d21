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
      const existingProduct = state.cart.find((item) => item.id === payload.id);
      console.log(state.cart);

      if (existingProduct != null) {
        let getIndex = state.cart.findIndex(
          (product) => product.id === existingProduct.id
        );
        let getProduct = state.cart.find(
          (product) => product.id === existingProduct.id
        );
        let updatedQuantity = getProduct.quantity + 1;
        state.cart[getIndex] = {
          ...getProduct,
          quantity: updatedQuantity,
        };
      } else {
        state.totalTypeProductInCart += 1;
        state.cart.push({
          ...payload,
        });
      }
      console.log(state.totalTypeProductInCart);
    },

    increaseProduct(state, action) {
      const payload = action.payload;
      const existingProduct = state.cart.find((item) => item.id === payload.id);
      let getIndex = state.cart.findIndex(
        (product) => product.id === existingProduct.id
      );
      let getProduct = state.cart.find(
        (product) => product.id === existingProduct.id
      );
      let updatedQuantity = getProduct.quantity + 1;
      state.cart[getIndex] = {
        ...getProduct,
        quantity: updatedQuantity,
      };
    },

    decreaseProduct(state, action) {
      const payload = action.payload;
      const existingProduct = state.cart.find((item) => item.id === payload.id);
      let getIndex = state.cart.findIndex(
        (product) => product.id === existingProduct.id
      );
      let getProduct = state.cart.find(
        (product) => product.id === existingProduct.id
      );
      let updatedQuantity = 1;
      if (getProduct.quantity > 1) {
        updatedQuantity = getProduct.quantity - 1;
      }
      state.cart[getIndex] = {
        ...getProduct,
        quantity: updatedQuantity,
      };
    },

    removeProduct(state, action) {
      state.cart = state.cart.filter((item) => item.id !== action.payload.id);
    }
  },
});

export const cartActions = cartSlicer.actions;
export default cartSlicer.reducer;
