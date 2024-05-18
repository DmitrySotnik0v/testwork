import { API } from "api";

import { IPost } from "../data/models";

export const postsApi = {
  async getPostsCurrentUser(userId: string): Promise<IPost[]> {
    const { data } = await API.get("posts", {
      params: {
        userId,
      },
    });
    return data;
  },
  async getPostCurrentUserById(id: string): Promise<IPost[]> {
    const { data } = await API.get("posts", {
      params: {
        id,
      },
    });
    return data;
  },
  //Сделал тут put, так как отправка через patch возвращала CORS
  async changeTitlePost(postId: string, changedPost: IPost) {
    await API.put(`posts/${postId}`, changedPost);
  },
};
