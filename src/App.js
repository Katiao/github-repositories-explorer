import React from "react";
import styled from "styled-components";
import { GithubContext } from "./context/context";
import Search from "./components/Search";
import "./App.css";

function App() {
  const data = React.useContext(GithubContext);
  console.log(data);
  return (
    <Wrapper>
      <div className="container">
        <Search />
      </div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  background-color: var(--clr-primary-white);
  width: 90vw;
  margin: 2rem auto;
  max-width: 1170px;
`;

export default App;
