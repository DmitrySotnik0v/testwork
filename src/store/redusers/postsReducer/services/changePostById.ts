import { IPost } from "../data/models";

export const changePostById = (post: IPost, changedPost: IPost, id: string) => {
  if (post.id === +id) {
    return changedPost;
  }
  return post;
};
