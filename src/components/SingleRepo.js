import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";

const SingleRepo = ({ name, description, stargazers_count }) => {
  return (
    <Wrapper className="section">
      <h3 className="title">{name}</h3>
      <p className="description">{description}</p>
      <p className="stars">{stargazers_count}</p>
      <FaStar className="icon" />
    </Wrapper>
  );
};

export default SingleRepo;

const Wrapper = styled.div`
  margin: var(--margin-sm) 0 var(--margin-sm) var(--margin-l);
  padding: 0.6rem 0.4rem;
  background-color: var(--clr-darker-grey);
  display: grid;
  @media only screen and (min-width: 401px) {
    grid-template-columns: 80% 10% 10%;
  }
  align-items: center;
  :first-child {
    margin: var(--margin-xs) 0 var(--margin-sm) var(--margin-l);
  }
  :last-child {
    margin: var(--margin-sm) 0 0 var(--margin-l);
  }

  .title {
    grid-column: 1 / 2;
    margin-bottom: 2px;
    word-wrap: break-word;
    word-break: break-word;
  }

  .description {
    grid-column: 1 / 2;
    word-wrap: break-word;
    //to prevent long words (e.g hyperlinks) from going over the page:
    word-break: break-word;
  }

  .stars {
    grid-column: 2 / 3;
    grid-row: 1 / 2;
    justify-self: end;
    padding-top: 2px;
    font-weight: 900;
    margin-bottom: 2px;
  }

  .icon {
    grid-column: 3 / 4;
    grid-row: 1 / 2;
    justify-self: center;
    margin-bottom: 2px;
  }
  //make responsive for smaller mobile screens:
  @media only screen and (max-width: 400px) {
    .section {
      grid-template-columns: 1fr, 1fr;
    }
    .title {
      grid-column: 1 / 3;
      grid-row: 1 / 2;
      text-align: center;
      font-size: 1rem;
      margin-bottom: 4px;
    }
    .description {
      grid-column: 1 / 3;
      grid-row: 2 / 3;
      text-align: center;
      font-size: 0.9rem;
      margin-bottom: 4px;
    }
    .stars {
      grid-column: 1 / 2;
      grid-row: 3 / 4;
      margin-right: 3px;
      margin-top: 1px;
    }
    .icon {
      grid-column: 2 / 3;
      grid-row: 3 / 4;
      justify-self: start;
      margin-left: 3px;
    }
  }
`;
