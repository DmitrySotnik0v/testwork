import { createSelector } from "@reduxjs/toolkit";

import { AppStore } from "store";

const userState = (state: AppStore) => state.users;

export const S_users = createSelector(userState, (state) => state.users);

export const S_loadingStatusUser = createSelector(
  userState,
  (state) => state.loadingStatusUser
);
