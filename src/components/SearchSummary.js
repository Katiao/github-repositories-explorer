import React from "react";
import styled from "styled-components";
import { useGithubContext } from "../context/context";

const SearchSummary = () => {
  const { searchedUser } = useGithubContext();
  return (
    <Wrapper>
      <p>Showing users for "{searchedUser}" </p>
    </Wrapper>
  );
};

export default SearchSummary;

const Wrapper = styled.div`
  margin: 0.75rem 0 0.15rem;
  color: var(--clr-darkest-grey);
`;
