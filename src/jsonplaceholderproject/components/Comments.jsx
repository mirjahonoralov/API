import React from "react";
import Skeleton from "react-loading-skeleton";
import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const Comments = () => {
  const { userID } = useParams();
  const [posts, loading] = useFetch(`comments?postId=${userID}`);
  return (
    <div className="container">
      {loading ? (
        <Skeleton count={5} />
      ) : (
        posts.map((comment, id) => {
          return (
            <div className="p-3 border my-3" key={id}>
              <h4>Title: {comment.name}</h4>
              <p>{comment.body}</p>
              <h5>{comment.email}</h5>
            </div>
          );
        })
      )}
    </div>
  );
};

export default Comments;
