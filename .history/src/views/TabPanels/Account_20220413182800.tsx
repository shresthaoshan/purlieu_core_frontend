import React from "react";
import { ClientSpan, CredentailsContainer } from "./Credentials";
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
        <UserNameSpan></UserNameSpan>
      </div>
    </AccountContainer>
  );
};
export const AccountContainer = styled(CredentailsContainer)``;
export const UserNameSpan = styled(ClientSpan)``;
