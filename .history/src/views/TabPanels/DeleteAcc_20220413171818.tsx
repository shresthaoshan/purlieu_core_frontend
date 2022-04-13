import React from "react";
import styled from "styled-components";
import { LabelInput } from "../styles/styles";
import { ClientSpan, CredentailsContainer } from "./Credentials";

export const DeleteAcc = () => {
  return (
    <DeleteAccountContainer>
      <DeleteAccSpan>DELETE ACCOUNT</DeleteAccSpan>
      <DeleteParagraph>
        You've just entered the{" "}
        <span style={{ color: "#FD5656" }}>danger zone!</span> If you would like
        to continue and remove your account, you can do so by entering your
        password below and confirming the prompts.
      </DeleteParagraph>
      <FormPw>
        <PasswordLabel>Password:</PasswordLabel>
        <InputPw placeholder="*password"></InputPw>
        <ContinueBtn>Continue</ContinueBtn>
      </FormPw>
    </DeleteAccountContainer>
  );
};
export const PasswordLabel = styled.span`
  font-size: 15px;
`;
export const ContinueBtn = styled.button`
  background-color: #fd5656;
  width: 10rem;
  border: none;
  border-radius: 5px;
  color: #fff;
  font-weight: bold;
  padding: 0.6rem;
  margin-top: 1rem;
`;
export const InputPw = styled(LabelInput)`
  margin-top: 1rem;
  /* padding: 5%; */
  /* padding: 0.5rem;
  color: #272b30;
  outline: none;
  font-weight: bold;
  height: 2.2rem; */
`;
export const FormPw = styled.form`
  display: flex;
  flex-direction: column;
  margin-top: 2rem;
`;
export const DeleteAccountContainer = styled(CredentailsContainer)``;
export const DeleteAccSpan = styled(ClientSpan)``;
export const DeleteParagraph = styled.p`
  font-size: 12px;
  margin-top: 2rem;
`;
