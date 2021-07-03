import React from "react";
import styled from "styled-components";
import { GithubContext } from "../context/context";

const SearchForm = () => {
  //const { setSearchTerm } = GithubContext();
  return (
    <Wrapper className="section">
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
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* .section-center {
    background-color: var(--clr-primary-white);
    width: 90vw;
    margin: 2rem auto;
    max-width: 1170px;
  } */
  .form-control {
    background-color: var(--clr-primary-white);
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      width: 100%;
      max-width: 20rem;
      border: 1px solid;
      border-color: var(--clr-dark-grey);
      color: var(--clr-primary-black);
      background-color: var(--clr-light-grey);
      padding: 0.5rem 0.5rem;
      margin: 1rem;
      border-radius: 2px;
    }
    input::placeholder {
      color: var(--clr-darker-grey);
    }

    button {
      border-radius: 2px;
      width: 100%;
      max-width: 20rem;
      border: 1px solid;
      border-color: var(--clr-primary-blue);
      background-color: var(--clr-primary-blue);
      color: var(--clr-light-grey);
      padding: 0.5rem 0.5rem;
      margin: 0 1rem 1rem;
      cursor: pointer;
      &:hover {
        background-color: var(--clr-dark-blue);
        color: var(--clr-primary-white);
      }
    }
  }
`;
export default SearchForm;
