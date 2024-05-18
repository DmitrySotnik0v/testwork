import { useParams } from "react-router-dom";

import { Comments, FormForChangingPost, Post } from "./components";

import style from "./CurrentPostPage.module.css";

const CurrentPostPage = () => {
  const { id } = useParams();

  return (
    <div className={style.currentPostPage}>
      <FormForChangingPost />
      <Post postId={id} />
      <Comments postId={id} />
    </div>
  );
};

export default CurrentPostPage;
