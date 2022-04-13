import React from "react";
import {
  CardDetailsLabel,
  Container,
  LabelInput,
  SignInBtn,
  SignUpContainer,
  SignUpWithGoogle,
} from "./styles/styles";
// import { Link } from "react-router-dom";
// import  {useHistory} from  "re"

import { useNavigate } from "react-router-dom";

import styled from "styled-components";
export const SignUp = () => {
  // const history =useHistory
  const navigate = useNavigate();
  const handleClick = () => console.log("w");
  return (
    <Container>
      <SignUpContainer>
        <CardDetailsLabel>SIGN UP </CardDetailsLabel>
        <LabelInput placeholder="Name*"></LabelInput>
        <LabelInput placeholder="Email*"></LabelInput>
        <LabelInput placeholder="Password*"></LabelInput>
        <LabelInput placeholder="Confirm Password*"></LabelInput>
        <SignInBtn>SIGN UP</SignInBtn>
        <span>OR</span>
        <SignUpWithGoogle>SIGN UP WITH GOOGLE</SignUpWithGoogle>

        <ToLoginPage>
          <p>Already have an account?</p>
          <LoginSignUpSpan onClick={() => navigate("/login")}>
            Login
          </LoginSignUpSpan>
        </ToLoginPage>
      </SignUpContainer>
    </Container>
  );
};
export const ToLoginPage = styled.div`
  display: flex;
  flex-direction: row;
  /* justify-content: center; */
  font-size: 14px;
  margin-top: 1rem;
  align-items: center;
`;
export const LoginSignUpSpan = styled.div`
  color: #027e1d;
  cursor: pointer;
`;
