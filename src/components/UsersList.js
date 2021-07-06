import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
//import SingleUser from "./SingleUser";
//import Loading from "./Loading";
import { useGithubContext } from "../context/context";
import SingleRepo from "./SingleRepo";
import Loading from "./Loading";

function UsersList() {
  //destructuring, getting data/state from context:
  const { isRepoLoading, repos, githubUsers, searchRepos } = useGithubContext();
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    // if clicked username is already active, then close it
    if (clicked === index) {
      return setClicked(null);
    }
    //otherwise set clicked to actual value which ends up opening it
    setClicked(index);
  };

  const handleClick = (index, login) => {
    searchRepos(login);
    toggle(index);
  };

  //mapping through users data and displaying each user:
  return (
    <div>
      {githubUsers.map((item, index) => {
        return (
          <>
            <Wrapper onClick={() => handleClick(index, item.login)} key={index}>
              <h3 className="login">{item.login}</h3>
              <MdKeyboardArrowDown
                className={`${
                  clicked === index ? "arrow-down arrow" : "arrow"
                }`}
              />
            </Wrapper>
            {clicked === index ? (
              <div>
                {isRepoLoading ? (
                  <Loading />
                ) : (
                  repos.map((repo) => {
                    return <SingleRepo key={repo.id} {...repo} />;
                  })
                )}
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
  margin: 0.75rem 0;
  border-radius: 2px;
  cursor: pointer;

  .login {
    font-weight: 400;
    font-size: 1rem;
  }

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
