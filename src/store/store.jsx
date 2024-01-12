import paginationSlicer from "./paginationSlicer";
import productListSlicer from "./productListSlicer";
import productSlicer from "./productSlicer";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    productList: productListSlicer,
    product: productSlicer,
    pagination: paginationSlicer
  }
})

export default store