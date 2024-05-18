import { createAsyncThunk, createReducer } from "@reduxjs/toolkit";

import { IInitialUsersState, LoadingStatus } from "./data/models";
import { userApi } from "./api/usersApi";

const initialState: IInitialUsersState = {
  users: [],
  loadingStatusUser: LoadingStatus.IDLE,
};

export const fetchUsers = createAsyncThunk(
  "users/fetchUsers",
  userApi.getUsers
);

export const usersReducer = createReducer(initialState, (builber) => {
  builber
    .addCase(fetchUsers.pending, (state) => {
      state.loadingStatusUser = LoadingStatus.PENDING;
    })
    .addCase(fetchUsers.fulfilled, (state, action) => {
      state.users = action.payload;
      state.loadingStatusUser = LoadingStatus.FULFILLED;
    })
    .addCase(fetchUsers.rejected, (state) => {
      state.loadingStatusUser = LoadingStatus.REJECTED;
    });
});
