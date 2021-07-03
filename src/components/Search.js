import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";

const Search = () => {
  return (
    <Wrapper className="section">
      <div className="section-center">
        <form>
          <div className="form-control">
            <input
              type="text"
              placeholder="Enter username"
              //value={user}
              //onChange={(e) => setUser(e.target.value)}
            />
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .section-center {
    background-color: var(--clr-primary-white);
    width: 90vw;
    margin: 2rem auto;
    max-width: 1170px;
  }
  .form-control {
    background-color: var(--clr-primary-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      outline: none;
      width: 100%;
      max-width: 20rem;
      border: 1px solid;
      border-color: var(--clr-dark-grey);
      border-width: thin;
      color: var(--clr-primary-black);
      padding: 0.5rem 0.5rem;
      background-color: var(--clr-light-grey);
      margin: 1rem;
      border-radius: 2px;
    }
    input::placeholder {
      color: var(--clr-darker-grey);
    }
  }
`;
export default Search;
