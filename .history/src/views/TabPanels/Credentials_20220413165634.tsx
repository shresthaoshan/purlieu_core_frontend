import React, { useState } from "react";
import styled from "styled-components";

export const Credentials = () => {
  const [apiKey, setApiKey] = useState<string>("#fskejfahsefhsjfahb33h43hj");
  const [secretKey, setSecretKey] = useState<string>(
    "#fskejfahsefhsjfahb33h43hj"
  );

  return (
    <CredentailsContainer>
      <ApiKeyContainer>
        <ClientSpan>CLIENT API KdEY</ClientSpan>
        <ApiKeyBox>
          <ApiKeySpan>{apiKey}</ApiKeySpan>
        </ApiKeyBox>
      </ApiKeyContainer>
      <ClientSecretKeyContainer>
        <ClientSpan>CLIENT SECRET KEY</ClientSpan>
        <SecretKeyBox>
          <SecretKeySpan>{secretKey}</SecretKeySpan>
        </SecretKeyBox>
      </ClientSecretKeyContainer>
    </CredentailsContainer>
  );
};
export const CredentailsContainer = styled.div`
  margin: 2rem 1rem;
  display: flex;
  flex-direction: column;
  color: var(--main-black-grey);
  min-height: 27rem;
  @media screen and (max-width: 768px) {
    margin: 2rem 0.2rem;
  }
`;
export const ApiKeyBox = styled.div`
  /* border: 1px solid grey; */
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
  /* height: 100%; */
  padding: 0.4rem;
  margin-top: 1rem;
  width: 30rem;
  @media screen and (max-width: 660px) {
    /* width: 15rem; */
    width: 100%;
  }

  /* width: 150%; */
`;
export const ApiKeyContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 2rem;
`;
export const ClientSecretKeyContainer = styled.div`
  margin-bottom: 2rem;
`;

export const ApiKeySpan = styled.span`
  color: var(--main-light-grey);
  font-size: 12px;
`;
export const SecretKeyBox = styled(ApiKeyBox)``;
export const SecretKeySpan = styled(ApiKeySpan)``;
export const ClientSpan = styled.div`
  /* font-weight: bold; */
`;
