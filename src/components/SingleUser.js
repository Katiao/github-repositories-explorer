import React from "react";
import styled from "styled-components";
import { MdKeyboardArrowDown } from "react-icons/md";

const SingleUser = ({ login }) => {
  return (
    <Wrapper>
      <div className="userCard">{login}</div>
      <MdKeyboardArrowDown className="arrow" />
    </Wrapper>
  );
};

export default SingleUser;

const Wrapper = styled.article`
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
`;
