import { createSelector } from "@reduxjs/toolkit";

import { AppStore } from "store";

const postsState = (state: AppStore) => state.posts;

export const S_posts = createSelector(postsState, (state) => state.posts);

export const S_currentPost = createSelector(postsState, (state) => state.currentPost);

export const S_loadingStatusPosts = createSelector(
  postsState,
  (state) => state.loadingStatusPosts
);

export const S_loadingStatusOnePost = createSelector(
  postsState,
  (state) => state.loadingStatusOnePost
);