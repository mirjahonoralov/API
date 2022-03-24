import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Comments, Layout } from "./components";
import { HomeP, PostsP, SpecificUserP, UsersP } from "./pages";

const index = () => {
  return (
    <BrowserRouter>
      <Layout>
        <Routes>
          <Route path="/">
            <Route path="" element={<HomeP />} />
            <Route path="users" element={<UsersP />} />
            <Route path="posts" element={<PostsP />} />
          </Route>
          <Route path="users/:userID" element={<SpecificUserP />} />
          <Route path="users/:userID/comments" element={<Comments />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  );
};

export default index;
