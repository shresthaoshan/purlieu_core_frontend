import React, { useState } from "react";
import styled from "styled-components";

export const Credentials = () => {
  const [apiKey, setApiKey] = useState<string>("#fskejfahsefhsjfahb33h43hj");

  return (
    <CredentailsContainer>
      <span>CLIENT API KEY</span>
      <ApiKeyBox>
        <span>{apiKey}</span>
      </ApiKeyBox>
    </CredentailsContainer>
  );
};
export const CredentailsContainer = styled.div`
  margin: 2rem 1rem;
  display: flex;
  flex-direction: column;
  color: var(--main-black-grey);
`;
export const ApiKeyBox = styled.div`
  /* border: 1px solid grey; */
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  height: 100%;
`;
