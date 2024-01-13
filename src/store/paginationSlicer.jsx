import { createSlice } from "@reduxjs/toolkit";

const paginationSlicer = createSlice({
  name: 'pagination',
  initialState: {
    currentPage: 1,
    postsPerPage: 12,
    pageNumbers : [],

  },
  reducers: {
    changeCurrentPage(state, action) {
      state.currentPage = action.payload;
    },

    changePostsPerPage(state, action) {
      const payload = action.payload;
      state.postsPerPage = parseFloat(payload);
    },

    changeToPrePage(state, action) {
      if (state.currentPage > 1) {
        state.currentPage -= 1;
      }
    },

    changeToNextPage(state, action) {
      if (state.currentPage < state.pageNumbers.length) {
        state.currentPage += 1;
      }
    },

    setPageNumbers(state, action) {
      state.pageNumbers = action.payload;
    }
  }
})

export const paginationActions = paginationSlicer.actions;
export default paginationSlicer.reducer;