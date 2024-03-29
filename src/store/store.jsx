import cartSlicer from "./cartSlicer";
import paginationSlicer from "./paginationSlicer";
import productListSlicer from "./productListSlicer";
import productSlicer from "./productSlicer";

const { configureStore } = require("@reduxjs/toolkit");

const store = configureStore({
  reducer: {
    productList: productListSlicer,
    product: productSlicer,
    pagination: paginationSlicer,
    cart: cartSlicer
  }
})

export default store