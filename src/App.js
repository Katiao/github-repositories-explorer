import React from "react";
import styled from "styled-components";
import SearchForm from "./components/SearchForm";
import UsersList from "./components/UsersList";
import Loading from "./components/Loading";
import "./App.css";
import { GithubContext } from "./context/context";

function App() {
  const { isLoading } = React.useContext(GithubContext);
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
        <UsersList />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  .container {
    background-color: var(--clr-primary-white);
    display: grid;
    justify-content: center;
    grid-template-columns: 18rem;
    gap: 1rem;
  }
`;

const Container = styled.div`
  .container {
    background-color: var(--clr-primary-white);
    display: grid;
    justify-content: center;
    grid-template-columns: 18rem;
    gap: 1rem;
  }
`;

export default App;
