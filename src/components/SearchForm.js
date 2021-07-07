import { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useGithubContext } from "../context/context";

const SearchForm = () => {
  //get things from global context:
  const { searchGithubUsers, isLoading, setSearchedUser } = useGithubContext();

  //local state for onChange while user types search term:
  const [searchTerm, setSearchTerm] = useState("");

  //useref used for focus on search:
  const searchValue = useRef("");

  //focus on search form when app loads:
  useEffect(() => {
    searchValue.current.focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchTerm) {
      setSearchedUser(searchTerm);
      searchGithubUsers(searchTerm);
    }
  };
  return (
    <Wrapper className="section">
      <form onSubmit={handleSubmit}>
        <div className="form-control">
          <input
            type="text"
            placeholder="Enter username"
            value={searchTerm}
            ref={searchValue}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          {!isLoading && <button type="submit">Search</button>}
        </div>
      </form>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  .form-control {
    display: flex;
    flex-direction: column;
    align-items: center;
    input {
      font-family: default;
      font-size: var(--font-size-m);
      width: 100%;
      border: 1px solid;
      border-color: var(--clr-dark-grey);
      color: var(--clr-primary-black);
      background-color: var(--clr-light-grey);
      padding: 0.5rem 0.5rem;
      margin: 0 var(--margin-l) var(--margin-l);
      border-radius: 2px;
    }
    input:focus {
      border-color: var(--clr-dark-grey);
      outline: none;
    }

    input::placeholder {
      color: var(--clr-darkest-grey);
      font-family: default;
      font-size: var(--font-size-m);
    }

    button {
      border-radius: 2px;
      width: 100%;
      border: 1px solid;
      border-color: var(--clr-primary-blue);
      background-color: var(--clr-primary-blue);
      color: var(--clr-light-grey);
      font-family: default;
      font-size: var(--font-size-m);
      padding: 0.5rem 0.5rem;
      margin: 0 var(--margin-l);
      cursor: pointer;
      transition: all 0.3s linear;
      &:hover {
        background-color: var(--clr-dark-blue);
        color: var(--clr-primary-white);
      }
    }
  }
`;
export default SearchForm;
