import React from "react";
import { Link } from "react-router-dom";
import { Card, CardTitle, CardText } from "reactstrap";

const PostCard = ({ post }) => {
  return (
    <Card body className="my-3">
      <CardTitle tag="h4">
        <Link
          to={`/users/${post.id}/comments`}
        >{`${post.id}. ${post.title}`}</Link>
      </CardTitle>
      <CardText>{post.body}</CardText>
    </Card>
  );
};

export default PostCard;
