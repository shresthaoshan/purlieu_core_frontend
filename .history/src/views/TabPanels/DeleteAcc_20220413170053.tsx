import React from "react";
import styled from "styled-components";
import { ClientSpan, CredentailsContainer } from "./Credentials";

export const DeleteAcc = () => {
  return (
    <DeleteAccountContainer>
      <DeleteAccSpan>DELETE ACCOUNT</DeleteAccSpan>
    </DeleteAccountContainer>
  );
};

export const DeleteAccountContainer = styled(CredentailsContainer)``;
export const DeleteAccSpan = styled(ClientSpan)``;
