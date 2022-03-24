import React from "react";
import { Link } from "react-router-dom";
import {
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  CardText,
  CardTitle,
} from "reactstrap";

const UserCard = ({ user }) => {
  return (
    <Card>
      <CardHeader>
        <Link to={`/users/${user.id}`}>{`${user.name} (${user.email})`}</Link>
      </CardHeader>
      <CardBody>
        <CardTitle tag="h5">
          {user.username} {user.phone}
        </CardTitle>
        <CardText>{`${user.company.name} (${user.company.bs})`}</CardText>
      </CardBody>
      <CardFooter>
        <CardText>
          <small className="text-muted">{`${user.address.city}/${user.address.street}/${user.address.suite}`}</small>
        </CardText>
      </CardFooter>
    </Card>
  );
};

export default UserCard;
