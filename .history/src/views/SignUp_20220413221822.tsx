import React from "react";
import {
  CardDetailsLabel,
  Container,
  LabelInput,
  SignInBtn,
  SignUpContainer,
  SignUpWithGoogle,
} from "./styles/styles";
import { Link } from "react-router-dom";

import styled from "styled-components";
export const SignUp = () => {
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

        <div className="newton">
          <div className="new">
            <p>Already have an account?</p>
          </div>
          <Link to="/login">Login</Link>
        </div>
      </SignUpContainer>
    </Container>
  );
};
