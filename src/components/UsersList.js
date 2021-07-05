import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
//import SingleUser from "./SingleUser";
//import Loading from "./Loading";
import { useGithubContext } from "../context/context";
import SingleRepo from "./SingleRepo";
import { FaStar } from "react-icons/fa";

function UsersList() {
  //destructuring, getting data/state from context:
  const { loading, repos, githubUsers, searchRepos } = useGithubContext();
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    // if clicked username is already active, then close it
    if (clicked === index) {
      return setClicked(null);
    }
    //otherwise set clicked to actual value which ends up opening it
    setClicked(index);
  };

  //loading should be true by default, false during development:
  /* if (loading) {
    return <Loading />;
  } */

  const handleClick = (index, login) => {
    searchRepos(login);
    toggle(index);
  };

  //mapping through users data and displaying each user via separate component:
  return (
    <div>
      {githubUsers.map((item, index) => {
        return (
          <>
            <Wrapper onClick={() => handleClick(index, item.login)} key={index}>
              <h3>{item.login}</h3>
              <MdKeyboardArrowDown
                className={`${
                  clicked === index ? "arrow-down arrow" : "arrow"
                }`}
              />
            </Wrapper>
            {clicked === index ? (
              <div>
                {repos.map((repo) => {
                  return <SingleRepo key={repo.id} {...repo} />;
                })}
              </div>
            ) : null}
          </>
        );
      })}
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  //max-width: 20rem;
  border: 1px solid;
  border-color: var(--clr-dark-grey);
  color: var(--clr-primary-black);
  background-color: var(--clr-light-grey);
  padding: 0.4rem 0.3rem;
  margin: 1rem 0;
  border-radius: 2px;
  cursor: pointer;

  .arrow {
    font-size: 1.2rem;
    stroke-width: 0.02rem;
    cursor: pointer;
  }

  .arrow-down {
    transform: rotate(180deg);
  }
`;

export default UsersList;
