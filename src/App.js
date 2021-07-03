import React from "react";
import styled from "styled-components";
import { GithubContext } from "./context/context";
import SearchForm from "./components/SearchForm";
import UsersList from "./components/UsersList";
import "./App.css";

function App() {
  const data = React.useContext(GithubContext);
  console.log(data);
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

export default App;
