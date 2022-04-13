import React from "react";
import {
  CardDetailsLabel,
  Container,
  LabelInput,
  SignUpContainer,
} from "./styles/styles";

export const Login = () => {
  return (
    <Container>
      <SignUpContainer>
        <CardDetailsLabel>LOGIN </CardDetailsLabel>
        <LabelInput placeholder="Email*"></LabelInput>
        <LabelInput placeholder="Password*"></LabelInput>
        <SignInBtn>SIGN UP</SignInBtn>
        <span>OR</span>
        <SignUpWithGoogle>SIGN UP WITH GOOGLE</SignUpWithGoogle>
      </SignUpContainer>
    </Container>
  );
};
