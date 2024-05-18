import { API } from "api";

import { TComment } from "../data/models";

export const commentsApi = {
  async getCommentsForPost(postId: string): Promise<TComment[]> {
    const { data } = await API.get("comments", {
      params: {
        postId,
      },
    });
    return data;
  },
};
