import React from "react";
import { ApiKeyBox, ApiKeySpan, CredentailsContainer } from "./Credentials";
import styled from "styled-components";
export const Account = () => {
  return (
    <AccountContainer>
      <span>Edit Profile</span>
      <ChangeButtonsContainer>
        <Button>Change Username</Button>
        <Button>2</Button>
        <Button>3</Button>
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
export const ChangeButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Button = styled.button`
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
  /* height: 100%; */
  padding: 0.4rem;
  font-weight: bold;
  margin-top: 1rem;
  border-radius: 5px;
  border: none;
  color: #272b30;
  /* width: 30rem; */
`;
