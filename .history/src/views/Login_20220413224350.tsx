import React from "react";
import {
  CardDetailsLabel,
  Container,
  LabelInput,
  SignInBtn,
  SignUpContainer,
  SignUpWithGoogle,
} from "./styles/styles";

export const Login = () => {
  return (
    <Container>
      <SignUpContainer>
        <CardDetailsLabel>LOGIN </CardDetailsLabel>
        <LabelInput placeholder="Email*"></LabelInput>
        <LabelInput placeholder="Password*"></LabelInput>
        <SignInBtn>LOGIN</SignInBtn>
        <span>OR</span>
        <SignUpWithGoogle>LOGIN UP WITH GOOGLE</SignUpWithGoogle>
        <ToLoginPage>
          <p>Already have an account?</p>
          <LoginSignUpSpan onClick={() => navigate("/Login")}>
            Login
          </LoginSignUpSpan>
        </ToLoginPage>
      </SignUpContainer>
    </Container>
  );
};
