import React from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import PostCard from "../components/PostCard";
import useFetch from "../hooks/useFetch";

const SpecificUserP = () => {
  const { userID } = useParams();
  const [posts, loading] = useFetch(`posts?userId=${userID}`);
  return (
    <div className="container">
      {loading ? (
        <Skeleton count={5} />
      ) : (
        posts.map((post) => (
          <div key={post.id} className="mb-3">
            <PostCard post={post} userID={userID} />
          </div>
        ))
      )}
    </div>
  );
};

export default SpecificUserP;
