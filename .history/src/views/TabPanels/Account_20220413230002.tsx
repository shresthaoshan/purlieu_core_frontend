import React from "react";
// import {
  // ApiKeyBox,
  // ApiKeySpan,
  // ClientSpan,
  // CredentailsContainer,
// } from "./Credentials";
import styled from "styled-components";
import { AccountContainer, Button, ChangeButtonsContainer, EditSpan, UserNameBox, UserNameEmailSpan, UserNameSpan } from "../styles/styles";
export const Account = () => {
  return (
    <AccountContainer>
      <EditSpan>Edit Profile</EditSpan>
      <ChangeButtonsContainer>
        <Button>Change Username</Button>
        <Button>Change Email</Button>
        <Button>Change Password</Button>
      </ChangeButtonsContainer>
      <UserNameEmailSpan>Username:</UserNameEmailSpa>
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
