import { createSlice } from "@reduxjs/toolkit";

const paginationSlicer = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 0,
    postsPerPage: 12,
    pageNumbers : [],

  },
  reducers: {

  }
})

export const paginationActions = paginationSlicer.actions;
export default paginationSlicer.reducer;