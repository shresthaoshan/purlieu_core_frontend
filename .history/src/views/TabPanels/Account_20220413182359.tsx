import React from "react";
import { CredentailsContainer } from "./Credentials";
import styled from "styled-components";
export const Account = () => {
  return (
    <AccountContainer>
      <div>
        <span>Edit Profile</span>
        <div>
          <div>1</div>
          <div>2</div>
          <div>3</div>
        </div>
      </div>
    </AccountContainer>
  );
};
export const AccountContainer = styled(CredentailsContainer)``;
