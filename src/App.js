import React from "react";
import styled from "styled-components";
import SearchForm from "./components/SearchForm";
import UsersList from "./components/UsersList";
import Loading from "./components/Loading";
import SearchSummary from "./components/SearchSummary";
import { useGithubContext } from "./context/context";

function App() {
  const { isLoading, showSearchSummary } = useGithubContext();
  if (isLoading) {
    return (
      <Wrapper>
        <div className="container">
          <SearchForm />
          <Loading />
        </div>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div className="container">
        <SearchForm />
        {showSearchSummary && <SearchSummary />}
        <UsersList />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .container {
    margin: var(--margin-l);
    background-color: var(--clr-primary-white);
    display: grid;
    justify-content: center;
    grid-template-columns: 30%;
    @media only screen and (max-width: 1300px) {
      grid-template-columns: 40%;
    }
    @media only screen and (max-width: 950px) {
      grid-template-columns: 50%;
    }
    @media only screen and (max-width: 650px) {
      grid-template-columns: 80%;
    }
    @media only screen and (max-width: 450px) {
      grid-template-columns: 100%;
      margin: var(--margin-sm);
    }

    //grid-template-columns: 18rem;
    //grid-template-columns: minmax(15rem, 30%);
  }
`;

export default App;
