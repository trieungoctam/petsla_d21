import { createSlice } from "@reduxjs/toolkit";

const productSlicer = createSlice({
  name: "product",
  initialState: {
    images,
    product_name,
    price, 
    description
  },
  reducers: {
    selectProduct(state, action) {
      
    }
  }
})

export const productActions = productSlicer.actions;

export default productSlicer;