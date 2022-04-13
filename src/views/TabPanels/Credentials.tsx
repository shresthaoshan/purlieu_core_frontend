import React, { useState } from "react";
import styled from "styled-components";
import {
  ApiKeyBox,
  ApiKeyContainer,
  ApiKeySpan,
  ClientSecretKeyContainer,
  ClientSpan,
  CredentailsContainer,
  SecretKeyBox,
  SecretKeySpan,
} from "../styles/styles";

export const Credentials = () => {
  const [apiKey, setApiKey] = useState<string>("#fskejfahsefhsjfahb33h43hj");
  const [secretKey, setSecretKey] = useState<string>(
    "#fskejfahsefhsjfahb33h43hj"
  );

  return (
    <CredentailsContainer>
      <ApiKeyContainer>
        <ClientSpan>CLIENT API KEY</ClientSpan>
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
