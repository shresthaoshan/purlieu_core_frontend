import styled from "styled-components";
import { BsYoutube } from "react-icons/bs";
import {
  FooterAbout,
  FooterContainer,
  FooterSection,
  KuLogoImg,
  LeftSection,
  Rights,
  SocialMediaSection,
  TextRedirect,
} from "../styles/styles";
export const Footer = () => {
  return (
    <FooterContainer>
      <FooterSection>
        <LeftSection>
          <FooterAbout>
            <TextRedirect>About</TextRedirect>
            <TextRedirect>Need Help?</TextRedirect>
            <TextRedirect>Terms of Use</TextRedirect>
          </FooterAbout>
          <Rights>@2022 Purlieu/ All rights reserved</Rights>
        </LeftSection>
        <SocialMediaSection>
          <BsYoutube size={40} fill="red" style={{ cursor: "pointer" }} />
        </SocialMediaSection>
      </FooterSection>
    </FooterContainer>
  );
};
