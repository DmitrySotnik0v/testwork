export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export enum LoadingStatus {
  IDLE = "idle",
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}

export interface IInitialPostsState {
  posts: IPost[];
  currentPost:IPost | null
  loadingStatusPosts: LoadingStatus;
  loadingStatusOnePost: LoadingStatus;
}
