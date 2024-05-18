import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import MainPage from "pages/MainPage/MainPage";
import PostsCurrentUserPage from "pages/PostsCurrentUserPage/PostsCurrentUserPage";
import CurrentPostPage from "pages/CurrentPostPage/CurrentPostPage";

export const router = createBrowserRouter(
  createRoutesFromElements(
    <>
      <Route path="/" element={<MainPage />} />
      <Route path="/users/:id" element={<PostsCurrentUserPage />} />
      <Route path="/message/:id" element={<CurrentPostPage />} />
    </>
  )
);
