import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

import { IInitialPostsState, IPost, LoadingStatus } from "./data/models";
import { postsApi } from "./api/postsApi";

const initialState: IInitialPostsState = {
  posts: [],
  currentPost: null,
  loadingStatusPosts: LoadingStatus.IDLE,
  loadingStatusOnePost: LoadingStatus.IDLE,
};

export const fetchPosts = createAsyncThunk(
  "posts/fetchPosts",
  postsApi.getPostsCurrentUser
);

export const fetchPostById = createAsyncThunk(
  "posts/fetchPostById ",
  postsApi.getPostCurrentUserById
);

export const changePostTitle = createAsyncThunk(
  "posts/changePostTitle",
  async (requestData: { id: string; changedPost: IPost }) =>
    await postsApi.changeTitlePost(requestData.id, requestData.changedPost)
);

export const postsReducer = createReducer(initialState, (builder) => {
  builder
    .addCase(fetchPosts.pending, (state) => {
      state.loadingStatusPosts = LoadingStatus.PENDING;
    })
    .addCase(fetchPosts.fulfilled, (state, action) => {
      state.posts = action.payload;
      state.loadingStatusPosts = LoadingStatus.FULFILLED;
    })
    .addCase(fetchPosts.rejected, (state) => {
      state.loadingStatusPosts = LoadingStatus.REJECTED;
    }),

    builder
      .addCase(fetchPostById.pending, (state) => {
        state.loadingStatusOnePost = LoadingStatus.PENDING;
      })
      .addCase(fetchPostById.fulfilled, (state, action) => {
        state.currentPost = action.payload[0];
        state.loadingStatusOnePost = LoadingStatus.FULFILLED;
      })
      .addCase(fetchPostById.rejected, (state) => {
        state.loadingStatusOnePost = LoadingStatus.REJECTED;
      }),

    builder
      .addCase(changePostTitle.fulfilled, (state, action) => {
        const { changedPost } = action.meta.arg;
        state.currentPost = changedPost;
      })
});
