import { FC, useEffect } from "react";

import { Loader } from "UI";

import { useAppDispatch, useAppSelector } from "store";

import {
  S_currentPost,
  S_loadingStatusOnePost,
} from "store/redusers/postsReducer/selectors/postSelector";
import { LoadingStatus } from "store/redusers/postsReducer/data/models";
import { fetchPostById } from "store/redusers/postsReducer/postsReducer";

import style from "./Post.module.css";

type Props = {
  postId: string | undefined;
};

const Post: FC<Props> = ({ postId }) => {
  const currentPost = useAppSelector(S_currentPost);
  const loadingStatus = useAppSelector(S_loadingStatusOnePost);

  const dispatch = useAppDispatch();

  useEffect(() => {
    postId && dispatch(fetchPostById(postId));
  }, []);

  if (loadingStatus === LoadingStatus.PENDING) {
    return <Loader />;
  }

  return (
    <div className={style.post}>
      <div className={style.title}>{currentPost?.title}</div>
      <div className={style.description}>{currentPost?.body}</div>
    </div>
  );
};

export default Post;
