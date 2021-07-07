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
      <Container>
        <div className="container">
          <SearchForm />
          <Loading />
        </div>
      </Container>
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
    grid-template-columns: minmax(15rem, 30%);
  }
`;

const Container = styled.div`
  .container {
    margin: var(--margin-l);
    background-color: var(--clr-primary-white);
    display: grid;
    justify-content: center;
    //grid-template-columns: 18rem;
    grid-template-columns: minmax(15rem, 30%);
  }
`;

export default App;
