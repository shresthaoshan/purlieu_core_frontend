import React from "react";
import { SignUpContainer } from "./SignUp";
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
      </SignUpContainer>
    </Container>
  );
};
