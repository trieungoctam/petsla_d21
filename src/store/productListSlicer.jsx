import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const url = "http://103.252.95.181:8000/products/";

export const getProductList = createAsyncThunk(
  "productList/fetchProductList",
  async (name, thunkAPI) => {
    try {
      const response = await axios(url);
      const data = response.data;
      return data;
    } catch (error) {
      return thunkAPI.rejectWithValue("something went wrong");
    }
  }
);

const productListSlicer = createSlice({
  name: "productList",
  initialState: {
    productList: [],
    isLoading: true,
  },

  reducers: {

    
    sortProductsByRelevance(state, action) {
      state.productList.sort((a, b) => a.id - b.id);
    },

    sortProductsFromAtoZ(state, action) {
      state.productList.sort((a, b) =>
        a.product_name.localeCompare(b.product_name)
      );
    },

    sortProductsFromZtoA(state, action) {
      state.productList.sort((a, b) =>
        b.product_name.localeCompare(a.product_name)
      );
    },

    sortProductsByPriceFromLow(state, action) {
      state.productList.sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        return priceA - priceB;
      });
    },

    sortProductsByPriceFromHigh(state, action) {
      state.productList.sort((a, b) => {
        const priceA = parseFloat(a.price);
        const priceB = parseFloat(b.price);
        return priceB - priceA;
      });
    },

    sortBySearch(state, action) {
      state.productList.filter((product) => product.product_name.toLowerCase().includes(action.payload.toLowerCase()));
    }
  },

  extraReducers: (builder) => {
    builder
      .addCase(getProductList.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(getProductList.fulfilled, (state, action) => {
        state.isLoading = false;
        state.productList = action.payload;
        // console.log(action.payload);
      })
      .addCase(getProductList.rejected, (state, action) => {
        console.log(action);
        state.isLoading = false;
      });
  },
});

export const productListActions = productListSlicer.actions;
export default productListSlicer.reducer;
