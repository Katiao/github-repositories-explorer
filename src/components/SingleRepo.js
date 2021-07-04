import React from "react";
import styled from "styled-components";
import { FaStar } from "react-icons/fa";
//import { useGithubContext } from "../context/context";

const SingleRepo = () => {
  return (
    <Wrapper className="section">
      <h3 className="title">Repository title</h3>
      <p className="description">
        Repository description Lorem ipsum dolor sit amet, consectetur
        adipisicing elit. Ex omnis dolorum reiciendis dolore commodi placeat
        quibusdam itaque dolores sequi voluptas nam nobis cumque aliquam est
        soluta sit distinctio unde repellat quos.
      </p>
      <p className="stars">12</p>
      <FaStar className="icon" />
    </Wrapper>
  );
};

export default SingleRepo;

const Wrapper = styled.div`
  margin: 1rem 0 1rem 1rem;
  padding: 0.6rem 0.4rem;
  background-color: var(--clr-darker-grey);
  display: grid;
  grid-template-columns: 80% 10% 10%;
  align-items: center;

  .title {
    grid-column: 1 / 2;
    margin-bottom: 2px;
  }

  .description {
    grid-column: 1 / 2;
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
  //padding: 0.5rem 0.4rem;
`;
