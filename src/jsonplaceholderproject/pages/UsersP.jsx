import React from "react";
import Skeleton from "react-loading-skeleton";
import { UserCard } from "../components";
import useFetch from "../hooks/useFetch";

const UsersP = () => {
  const [users, loading] = useFetch("users");

  return (
    <div>
      <div className="container">
        {loading ? (
          <Skeleton count={5} />
        ) : (
          users.map((user) => (
            <div className="mb-3" key={user.id}>
              <UserCard user={user} />
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UsersP;
