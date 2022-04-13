import React from "react";
import { ApiKeyBox, ApiKeySpan, CredentailsContainer } from "./Credentials";
import styled from "styled-components";
export const Account = () => {
  return (
    <AccountContainer>
      <span>Edit Profile</span>
      <ChangeButtonsContainer>
        <button>1</button>
        <button>2</button>
        <button>3</button>
      </ChangeButtonsContainer>
      <span>UserNAme</span>
      <UserNameBox>
        <UserNameSpan>fefsejfkjefhj</UserNameSpan>
      </UserNameBox>
      <span>Email</span>
      <UserNameBox>
        <UserNameSpan>fefsejfkjefhj</UserNameSpan>
      </UserNameBox>
    </AccountContainer>
  );
};
export const AccountContainer = styled(CredentailsContainer)``;
export const UserNameBox = styled(ApiKeyBox)``;
export const UserNameSpan = styled(ApiKeySpan)``;
