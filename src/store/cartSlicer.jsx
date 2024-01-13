import { createSlice } from "@reduxjs/toolkit";

const cartSlicer = createSlice({
  name: "cart",
  initialState: {
    cart: [],
    totalTypeProductInCart: 0,
    isCartDrawerOpen: false,
    totalMoney : 0
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
        state.totalMoney+=getProduct.price;
      } else {
        state.totalTypeProductInCart += 1;
        state.cart.push({
          ...payload,
        });
        state.totalMoney+=payload.price;
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
      state.totalMoney += getProduct.price;
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
      state.totalMoney -= getProduct.price;
    },

    removeProduct(state, action) {
       const existingProduct = state.cart.find((item) => item.id === action.payload.id);
      state.cart = state.cart.filter((item) => item.id !== existingProduct.id);
      state.totalTypeProductInCart -= 1;
       state.totalMoney-=existingProduct.price*existingProduct.quantity;
  
    },

    closeCartDrawer(state) {
      state.isCartDrawerOpen = false;
    },

    openCartDrawer(state) {
      state.isCartDrawerOpen = true;
    }
  },
});

export const cartActions = cartSlicer.actions;
export default cartSlicer.reducer;
