import React from "react";
import styled from "styled-components";

const SingleUser = ({ login }) => {
  return (
    <Wrapper>
      <div className="userCard">{login}</div>
    </Wrapper>
  );
};

export default SingleUser;

const Wrapper = styled.article``;
