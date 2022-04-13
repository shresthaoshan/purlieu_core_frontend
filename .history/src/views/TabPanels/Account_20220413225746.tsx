import React from "react";
import {
  ApiKeyBox,
  ApiKeySpan,
  ClientSpan,
  CredentailsContainer,
} from "./Credentials";
import styled from "styled-components";
export const Account = () => {
  return (
    <AccountContainer>
      <EditSpan>Edit Profile</EditSpan>
      <ChangeButtonsContainer>
        <Button>Change Username</Button>
        <Button>Change Email</Button>
        <Button>Change Password</Button>
      </ChangeButtonsContainer>
      <UserNameEmailSpan>Username:</UserNameEmailSpan>
      <UserNameBox>
        <UserNameSpan>fefsejfkjefhj</UserNameSpan>
      </UserNameBox>
      <UserNameEmailSpan>Email:</UserNameEmailSpan>
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
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
export const Button = styled.button`
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
  padding: 0.4rem;
  font-weight: bold;
  margin-top: 1rem;
  border-radius: 5px;
  border: none;
  color: #272b30;
  cursor: pointer;
`;
export const UserNameEmailSpan = styled.span`
  margin-top: 3rem;
  font-size: 14px;
`;
export const EditSpan = styled(ClientSpan)`
  margin-bottom: 1rem;
`;
