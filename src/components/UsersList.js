import React from "react";
import SingleUser from "./SingleUser";
import Loading from "./Loading";
import { useGithubContext } from "../context/context";

function UsersList() {
  //destructuring, getting data/state from context:
  const { loading, githubUsers } = useGithubContext();

  //loading should be true by default, false during development:
  if (loading) {
    return <Loading />;
  }

  //mapping through users data and displaying each user via separate component:
  return (
    <section className="list">
      {githubUsers.map((item) => {
        return <SingleUser key={item.id} {...item} />;
      })}
    </section>
  );
}

export default UsersList;
