import React from "react";
import { CredentailsContainer } from "./Credentials";
import styled from "styled-components";
export const Account = () => {
  return (
    <AccountContainer>
      <div>
        <span>Edit Profile</span>
        <div>
          <button>1</button>
          <button>2</button>
          <div>3</div>
        </div>
      </div>
    </AccountContainer>
  );
};
export const AccountContainer = styled(CredentailsContainer)``;
