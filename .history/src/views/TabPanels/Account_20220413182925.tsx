import React from "react";
import { ApiKeyBox, ApiKeySpan, CredentailsContainer } from "./Credentials";
import styled from "styled-components";
export const Account = () => {
  return (
    <AccountContainer>
      <div>
        <span>Edit Profile</span>
        <div>
          <button>1</button>
          <button>2</button>
          <button>3</button>
        </div>
        <span>UserNAme</span>
        <UserNameBox>lulfejfekfhj</UserNameBox>
      </div>
    </AccountContainer>
  );
};
export const AccountContainer = styled(CredentailsContainer)``;
export const UserNameBox = styled(ApiKeyBox)``;
export const UserNameSpan = styled(ApiKeySpan)``;
