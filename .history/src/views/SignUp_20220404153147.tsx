import React from "react";
import { Container } from "./styles/styles";
import styled from "styled-components";
export const SignUp = () => {
  return (
    <Container>
      <SignUpContainer />
    </Container>
  );
};

export const SignUpContainer = styled.div`
  /* background-color: black; */
  /* border-radius: 2px; */
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 5rem; */
`;
