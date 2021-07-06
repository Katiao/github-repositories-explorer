import React from "react";
import styled from "styled-components";
import { useGithubContext } from "../context/context";

const SearchSummary = () => {
  const { searchedUser, githubUsers } = useGithubContext();
  return (
    <Wrapper>
      {githubUsers < 1 ? (
        <p>No users found with "{searchedUser}"</p>
      ) : (
        <p>Showing users with "{searchedUser}" </p>
      )}
    </Wrapper>
  );
};

export default SearchSummary;

const Wrapper = styled.div`
  margin: var(--margin-m) 0 var(--margin-xs);
  color: var(--clr-darkest-grey);
`;
