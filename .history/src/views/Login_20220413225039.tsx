import React from "react";
import {
  CardDetailsLabel,
  Container,
  LabelInput,
  LoginSignUpSpan,
  SignInBtn,
  SignUpContainer,
  SignUpWithGoogle,
  ToLoginPage,
} from "./styles/styles";
import { useNavigate } from "react-router-dom";

export const Login = () => {
  const navigate = useNavigate();

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
          <LoginSignUpSpan onClick={() => navigate("/signup")}>
            Signup
          </LoginSignUpSpan>
        </ToLoginPage>
      </SignUpContainer>
    </Container>
  );
};
