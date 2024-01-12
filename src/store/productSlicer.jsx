import { createSlice } from "@reduxjs/toolkit";



const productSlicer = createSlice({
  name: "product",
  initialState: {
    product: [],
  },
  reducers: {
    selectProduct(state, action) {
      let {productList, id} = action.payload;
      // console.log(productList);
      const productSelected = productList.find((product) => product.id === id);
      // console.log(state.product);
      // console.log(productSelected);
      return {
        ...state,
        product: productSelected
      }
    },

    
  }
})

export const productActions = productSlicer.actions;

export default productSlicer.reducer;