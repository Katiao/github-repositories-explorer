import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useGithubContext } from "../context/context";
import SingleRepo from "./SingleRepo";
import Loading from "./Loading";

function UsersList() {
  //destructuring, getting data/ global state from context:
  const { isRepoLoading, repos, githubUsers, searchRepos } = useGithubContext();

  //local state for accordion functionality:
  const [clicked, setClicked] = useState(false);

  const toggle = (index) => {
    // if clicked username is already active, then close it:
    if (clicked === index) {
      return setClicked(null);
    }
    //otherwise set clicked to actual value which ends up opening it:
    setClicked(index);
  };

  const handleClick = (index, login) => {
    searchRepos(login);
    toggle(index);
  };

  //mapping through users data and displaying each user login:
  return (
    <div>
      {githubUsers.map((item, index) => {
        return (
          <React.Fragment key={item.id}>
            <Wrapper onClick={() => handleClick(index, item.login)}>
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
                ) : repos < 1 ? (
                  <div>
                    <p>There are no repositories for this user</p>
                  </div>
                ) : (
                  /* mapping through repos for each user and displaying them: */
                  repos.map((repo) => {
                    return <SingleRepo key={repo.id} {...repo} />;
                  })
                )}
              </div>
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
}

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  border: 1px solid;
  border-color: var(--clr-dark-grey);
  color: var(--clr-primary-black);
  background-color: var(--clr-light-grey);
  padding: 0.4rem 0.3rem;
  margin: var(--margin-m) 0;
  border-radius: 2px;
  cursor: pointer;
  :first-child {
    margin: var(--margin-sm) 0;
  }

  .login {
    font-weight: 400;
    font-size: var(--font-size-m);
  }

  .arrow {
    font-size: 1.4rem;
    stroke-width: 0.02rem;
    cursor: pointer;
    transition: all 0.2s linear;
  }

  .arrow-down {
    transform: rotate(180deg);
  }
`;

export default UsersList;
