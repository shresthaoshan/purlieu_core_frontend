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
        <span>CLIENT API KEY</span>
        <ApiKeyBox>
          <ApiKeySpan>{apiKey}</ApiKeySpan>
        </ApiKeyBox>
      </ApiKeyContainer>
      <ClientSecretKeyContainer>
        <span>CLIENT SECRET KEY</span>
        <SecretKeyBox>
          <SecretKeySpan>{apiKey}</SecretKeySpan>
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
`;
export const ApiKeyBox = styled.div`
  /* border: 1px solid grey; */
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
  /* height: 100%; */
  padding: 0.4rem;
  margin-top: 1rem;

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
