import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

import { IInitialCommentsState, LoadingStatus } from "./data/models";
import { commentsApi } from "./api/commentsApi";

const initialState: IInitialCommentsState = {
  comments: [],
  loadingStatusComment: LoadingStatus.IDLE,
};

export const fetchComments = createAsyncThunk(
  "comments/fetchComments",
  commentsApi.getCommentsForPost
);

export const commentsReducer = createReducer(initialState, (builber) => {
  builber
    .addCase(fetchComments.pending, (state) => {
      state.loadingStatusComment = LoadingStatus.PENDING;
    })
    .addCase(fetchComments.fulfilled, (state, action) => {
      state.comments = action.payload;
      state.loadingStatusComment = LoadingStatus.FULFILLED;
    })
    .addCase(fetchComments.rejected, (state) => {
      state.loadingStatusComment = LoadingStatus.REJECTED;
    });
});
