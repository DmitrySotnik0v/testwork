import { FC, useEffect } from "react";

import { Loader } from "UI";

import { useAppDispatch, useAppSelector } from "store";

import { fetchComments } from "store/redusers/commentsReducer/commentsReducer";
import { S_comments, S_loadingStatusComment } from "store/redusers/commentsReducer/selectors/commentsSelector";
import { LoadingStatus } from "store/redusers/commentsReducer/data/models";

import style from './Comments.module.css'

type Props = {
  postId: string | undefined;
};

const Comments: FC<Props> = ({ postId }) => {
  const comments = useAppSelector(S_comments);
  const loadingStatus= useAppSelector(S_loadingStatusComment)

  const dispatch = useAppDispatch();

  useEffect(() => {
    postId && dispatch(fetchComments(postId));
  }, [postId]);

  if (loadingStatus === LoadingStatus.PENDING) {
    return <Loader />;
  }

  return (
    <div className={style.comments}>
      {comments.map((item) => (
        <div key={item.id}>
          <div className={style.userInfo}>
            <div className={style.avatar}/>
            <span>{item.email}</span>
          </div>
          <div>{item.name}</div>
          <div>{item.body}</div>
        </div>
      ))}
    </div>
  );
};

export default Comments;
