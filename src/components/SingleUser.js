import React, { useState } from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";
import { useGithubContext } from "../context/context";
import SingleRepo from "./SingleRepo";

const SingleUser = ({ login }) => {
  const { repos } = useGithubContext();

  //setting state locally here as we only want state to affect this component and not other SigleUser components
  const [isRepoOpen, setisRepoOpen] = useState(false);

  const showRepo = () => {
    setisRepoOpen(!isRepoOpen);
  };
  return (
    <Wrapper>
      <div className="user-card">
        <div>{login}</div>
        <MdKeyboardArrowDown
          className={`${isRepoOpen ? "arrow-down arrow" : "arrow"}`}
          onClick={showRepo}
        />
      </div>
      {isRepoOpen &&
        repos.map((item) => {
          return <SingleRepo key={item.id} {...item} />;
        })}
    </Wrapper>
  );
};

export default SingleUser;

const Wrapper = styled.article`
  .user-card {
    display: flex;
    justify-content: space-between;
    width: 100%;
    max-width: 20rem;
    border: 1px solid;
    border-color: var(--clr-dark-grey);
    color: var(--clr-primary-black);
    background-color: var(--clr-light-grey);
    padding: 0.4rem 0.3rem;
    margin: 1rem auto;
    border-radius: 2px;

    .arrow {
      font-size: 1.2rem;
      stroke-width: 0.02rem;
      cursor: pointer;
    }
    .arrow-down {
      //transition: all 0.3s linear;
      transform: rotate(180deg);
    }
  }
`;
