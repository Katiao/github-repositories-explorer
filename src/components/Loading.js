import React from "react";
import styled from "styled-components";

const Loading = () => {
  return <Wrapper></Wrapper>;
};

export default Loading;

const Wrapper = styled.div`
  border: 1.6rem solid var(--clr-light-grey);
  border-top: 1.6rem solid var(--clr-primary-blue);
  border-radius: 50%;
  width: 12rem;
  height: 12rem;
  animation: spin 2s linear infinite;
  margin: var(--margin-xl) auto;

  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
