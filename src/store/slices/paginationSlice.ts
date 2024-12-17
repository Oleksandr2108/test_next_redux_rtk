import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface PaginationProps {
  currentPage: number;
  postsPerPage: number;
}

const initialState: PaginationProps = {
  currentPage: 1,
  postsPerPage: 10,
};

const paginationSlice = createSlice({
  name: "pagination",
  initialState,
  reducers: {
    setCurrentPage: (state, action: PayloadAction<number>) => {
      state.currentPage = action.payload;
    },
    setPostsPerPage: (state, action: PayloadAction<number>) => {
      state.postsPerPage = action.payload;
    },
  },
});

export const { setCurrentPage, setPostsPerPage } = paginationSlice.actions;

export const selectedCurrentPage = (state: RootState) =>
  state.pagination.currentPage;
export const selectedPostsPerPage = (state: RootState) =>
  state.pagination.postsPerPage;

export default paginationSlice.reducer;
