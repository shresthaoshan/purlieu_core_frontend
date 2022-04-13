import React from "react";
import { LoginSignUpSpan, ToLoginPage } from "./SignUp";
import {
  CardDetailsLabel,
  Container,
  LabelInput,
  SignInBtn,
  SignUpContainer,
  SignUpWithGoogle,
} from "./styles/styles";
import { useNavigate } from "react-router-dom";

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
            Signup
          </LoginSignUpSpan>
        </ToLoginPage>
      </SignUpContainer>
    </Container>
  );
};
