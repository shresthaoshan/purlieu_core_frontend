import React from "react";
import styled from "styled-components";
import {
  ContinueBtn,
  DeleteAccountContainer,
  DeleteAccSpan,
  DeleteParagraph,
  FormPw,
  InputPw,
  LabelInput,
  PasswordLabel,
} from "../styles/styles";

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
