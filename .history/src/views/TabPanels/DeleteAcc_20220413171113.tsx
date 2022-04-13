import React from "react";
import styled from "styled-components";
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
      </FormPw>
    </DeleteAccountContainer>
  );
};
export const PasswordLabel = styled.span``;
export const InputPw = styled.input`
  margin-top: 1rem;
  /* padding: 5%; */
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
