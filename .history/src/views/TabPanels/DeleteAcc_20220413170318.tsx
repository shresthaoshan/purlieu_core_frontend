import React from "react";
import styled from "styled-components";
import { ClientSpan, CredentailsContainer } from "./Credentials";

export const DeleteAcc = () => {
  return (
    <DeleteAccountContainer>
      <DeleteAccSpan>DELETE ACCOUNT</DeleteAccSpan>
      <p>
        You've just entered the {""}
        <span style={{ color: "red" }}>danger zone!</span> If you would like to
        continue and remove your account, you can do so by entering your
        password below and confirming the prompts.
      </p>
    </DeleteAccountContainer>
  );
};

export const DeleteAccountContainer = styled(CredentailsContainer)``;
export const DeleteAccSpan = styled(ClientSpan)``;
