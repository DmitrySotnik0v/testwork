import { createSelector } from "@reduxjs/toolkit";

import { AppStore } from "store";

const commentsState = (state: AppStore) => state.comments;

export const S_comments = createSelector(commentsState, (state) => state.comments);

export const S_loadingStatusComment = createSelector(commentsState, (state) => state.loadingStatusComment);