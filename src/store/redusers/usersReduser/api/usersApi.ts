import { API } from "api";

import { IUser } from "../data/models";

export const userApi = {
  async getUsers(): Promise<IUser[]> {
    const { data } = await API.get("users");
    return data;
  },
};
