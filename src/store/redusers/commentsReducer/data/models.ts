export enum LoadingStatus {
  IDLE = "idle",
  PENDING = "pending",
  FULFILLED = "fulfilled",
  REJECTED = "rejected",
}

export type TComment = {
  postId: number;
  id: number;
  name: string;
  email: string;
  body: string;
};

export interface IInitialCommentsState {
  comments: TComment[];
  loadingStatusComment: LoadingStatus;
}
