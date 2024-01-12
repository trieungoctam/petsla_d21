import { createSlice } from "@reduxjs/toolkit";

const productSlicer = createSlice({
  name: "product",
  initialState: {
    product: [],
  },
  reducers: {
    selectProduct(state, action) {
      let {productList, id} = action.payload;
      
      const productSelected = productList.find((product) => product.id === id);
      state.product = productSelected;
      // return {
      //   ...state,
      //   product: productSelected
      // }
    },

    
  }
})

export const productActions = productSlicer.actions;

export default productSlicer.reducer;