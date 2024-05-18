import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";

import { Loader } from "UI";

import { useAppDispatch, useAppSelector } from "store";

import { LoadingStatus } from "store/redusers/postsReducer/data/models";
import { fetchPosts } from "store/redusers/postsReducer/postsReducer";
import {
  S_loadingStatusPosts,
  S_posts,
} from "store/redusers/postsReducer/selectors/postSelector";

import style from "./PostsCurrentUserPage.module.css";

const PostsCurrentUserPage = () => {
  const posts = useAppSelector(S_posts);

  const loadingStatus = useAppSelector(S_loadingStatusPosts);

  const { id } = useParams();

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchPosts(id!));
  }, []);

  if (loadingStatus === LoadingStatus.PENDING) {
    return <Loader />;
  }

  return (
    <div className={style.postsPage}>
      {posts.map((item) => (
        <Link
          className={style.postTitle}
          key={item.id}
          to={`/message/${item.id}`}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};

export default PostsCurrentUserPage;
