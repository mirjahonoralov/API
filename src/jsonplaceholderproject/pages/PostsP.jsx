import React, { useState } from "react";
import Skeleton from "react-loading-skeleton";
import PaginationComp from "../components/PaginationComp";
import PostCard from "../components/PostCard";
import useFetch from "../hooks/useFetch";

const PostsP = () => {
  const [pageNum, setPageNum] = useState(1);
  const clickNext = () => setPageNum(pageNum + 1);
  const clickPrev = () => setPageNum(pageNum - 1);
  const [posts, loading] = useFetch(`posts?_page=${pageNum}&_limit=${10}`);
  return (
    <div className="container">
      {loading ? (
        <Skeleton count={5} />
      ) : (
        <>
          {posts.map((post, id) => (
            <PostCard key={id} post={post} />
          ))}
          <PaginationComp
            setPageNum={setPageNum}
            clickNext={clickNext}
            clickPrev={clickPrev}
          />
        </>
      )}
    </div>
  );
};

export default PostsP;
