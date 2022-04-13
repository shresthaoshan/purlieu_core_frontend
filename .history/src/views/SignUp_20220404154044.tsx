import React from "react";
import { CardDetailsLabel, Container, LabelInput } from "./styles/styles";
import styled from "styled-components";
export const SignUp = () => {
  return (
    <Container>
      <SignUpContainer>
        <CardDetailsLabel>Card Details </CardDetailsLabel>
        <LabelInput placeholder="Name"></LabelInput>
        <LabelInput placeholder="Email"></LabelInput>
        <LabelInput placeholder="Password"></LabelInput>
        <LabelInput placeholder="Confirm Password"></LabelInput>
        <SignInBtn>Sign Up </SignInBtn>
        <span>OR</span>
        <SignUpWithGoogle></SignUpWithGoogle>
      </SignUpContainer>
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
export const SignInBtn = styled.button`
  width: 100%;
  background-color: #4bfa71;
  border: none;
  color: white;
`;
export const SignUpWithGoogle = styled.button`
  background-color: #4ba6fa;
  border: none;
  color: white;
  width: 100%;
`;
