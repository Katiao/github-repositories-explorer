import React from "react";
//import styled from "styled-components";
import { GithubContext } from "./context/context";
import SearchForm from "./components/SearchForm";
import UsersList from "./components/UsersList";
import "./App.css";

function App() {
  const data = React.useContext(GithubContext);
  console.log(data);
  return (
    <>
      <SearchForm />
      <UsersList />
    </>
  );
}

/* const Wrapper = styled.div`
  background-color: var(--clr-primary-white);
  width: 90vw;
  margin: 2rem auto;
  max-width: 1170px;
`; */

export default App;
