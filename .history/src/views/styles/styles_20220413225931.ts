import styled, { createGlobalStyle } from "styled-components";
import { FaBars } from "react-icons/fa";
import { Tab, TabList, TabPanel, Tabs } from "react-tabs";

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;

    }
    :root{
        --main-green: #4BFA71;
        --main-black-grey: #35495E;
        --main-grey : #35495E;
        --main-light-grey : #9EA7B1;

    }
    body{
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }


`;

//navBar

export const NavBarContainer = styled.div`
  padding: 1.5rem 0;
  box-shadow: 0 2px 6px -6px black;
`;
export const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  color: var(--main-green);
  font-weight: bold;
  width: 95%;
  margin: auto;
`;
export const LogoAndName = styled.div`
  display: flex;
  cursor: pointer;
`;
export const NavRightUl = styled.ul`
  list-style: none;
  display: flex;
  margin: 0;
  @media screen and (max-width: 768px) {
    display: none;
  }
`;
export const ItemsLi = styled.li`
  text-decoration: none;
  margin-left: 3rem;
  cursor: pointer;
`;
export const Logo = styled.img`
  width: 1.8rem;
  height: 1.2rem;
`;
export const PurlieuLabel = styled.span`
  margin-left: 1rem;
`;
export const Bars = styled(FaBars)`
  display: none;
  @media screen and (max-width: 768px) {
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    transform: translate(-100%, 75%);
    font-size: 1.8rem;
    cursor: pointer;
  }
`;

//end of navBar Section

//signUp  section

export const Container = styled.div`
  width: 95%;
  margin: auto;
  padding: 3rem 0 4rem 0;

  display: flex;
  justify-content: center;
`;
export const LabelInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  color: #272b30;
  outline: none;
  font-weight: bold;
  height: 2.2rem;
  font-size: 14px;
`;
export const CardDetailsLabel = styled.span`
  color: var(--main-black-grey);
  font-size: 18px;
  margin-bottom: 1.5rem;
`;

export const ToLoginPage = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 14px;
  margin-top: 1rem;
  align-items: center;
`;
export const LoginSignUpSpan = styled.div`
  color: #027e1d;
  cursor: pointer;
`;
export const SignUpContainer = styled.div`
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  color: #272b30;
  border-radius: 5px;
  width: 30rem;
  padding: 2rem;
`;
export const SignInBtn = styled.button`
  width: 100%;
  background-color: #4bfa71;
  border: none;
  color: white;
  padding: 0.7rem;
  border-radius: 5px;
  margin-bottom: 0.5rem;
  font-weight: bold;
`;
export const SignUpWithGoogle = styled.button`
  background-color: #4ba6fa;
  border: none;
  color: white;
  width: 100%;
  padding: 0.7rem;
  border-radius: 5px;
  margin-top: 0.5rem;
  font-weight: bold;
`;
// end of signUp  section

//footer section

export const FooterContainer = styled.div`
  width: 100%;
  min-height: 6.5rem;
  padding: 1.5rem 0;
  box-shadow: 0 -2px 6px -5px #333;
`;
export const FooterSection = styled.div`
  display: flex;
  font-weight: bold;
  width: 95%;
  margin: auto;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  color: var(--main-grey);
  @media screen and (max-width: 768px) {
    flex-direction: column-reverse;
  }
`;
export const LeftSection = styled.div`
  display: flex;
  flex-direction: column;
  @media screen and (max-width: 768px) {
    align-items: center;
  }
`;
export const FooterAbout = styled.div`
  display: flex;
  flex-direction: row;
  margin-bottom: 1.2rem;
`;
export const Rights = styled.span`
  font-size: 13px;
`;
export const KuLogoImg = styled.img`
  width: 2.5rem;
  height: 2.5rem;
  margin-left: 1rem;
  cursor: pointer;
`;
export const SocialMediaSection = styled.div`
  display: flex;
  @media screen and (max-width: 768px) {
    margin-bottom: 2rem;
  }
`;
export const TextRedirect = styled.span`
  font-size: 15px;
  margin-right: 1.2rem;
  cursor: pointer;
`;

//dashboard sidebar

export const DashBoardContainer = styled.div`
  width: 95%;
  margin: auto;
  font-weight: bold;
`;

export const SideBarSection = styled.div`
  width: 20rem;
  box-shadow: 5px 0 2px -5px #333;
  padding: 3rem 0 4rem 0;
`;
export const SideBarContent = styled.div`
  padding: 3rem 0 4rem 0;
`;

export const STabs = styled(Tabs)`
  display: flex;
`;

export const STabList = styled(TabList)`
  list-style: none;
  width: 20rem;
  outline: none;
  color: #272b30;
  @media screen and (max-width: 768px) {
    width: 20rem;
  }

  padding-inline-start: 0px;
`;

export const STab = styled(Tab)`
  background-color: ${(p: any) => (p.isTrue ? "#4BFA71" : "")};
  color: ${(p: any) => (p.isTrue ? "#fff" : "")};
  border-radius: 2px;
  cursor: pointer;
  margin-bottom: 1rem;
  padding: 0.5rem;
  border: none;
  outline: none;
`;

export const STabPanel = styled(TabPanel)``;

export const TabContents = styled.div`
  padding-left: 2rem;
  box-shadow: inset 11px 4px 9px -15px rgba(0, 0, 0, 0.75);
`;

//end of dashboard sidebar

// dashboard tabpanels components

export const CredentailsContainer = styled.div`
  margin: 2rem 1rem;
  display: flex;
  flex-direction: column;
  color: #272b30;
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
    width: 100%;
  }
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
export const ClientSpan = styled.span`
  text-transform: uppercase;
`;

////

export const AccountContainer = styled(CredentailsContainer)``;
export const UserNameBox = styled(ApiKeyBox)``;
export const UserNameSpan = styled(ApiKeySpan)``;
export const ChangeButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media screen and (max-width: 600px) {
    flex-direction: column;
  }
`;
export const Button = styled.button`
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.5);
  padding: 0.4rem;
  font-weight: bold;
  margin-top: 1rem;
  border-radius: 5px;
  border: none;
  color: #272b30;
  cursor: pointer;
`;
export const UserNameEmailSpan = styled.span`
  margin-top: 3rem;
  font-size: 14px;
`;
export const EditSpan = styled(ClientSpan)`
  margin-bottom: 1rem;
`;

// end of dashboard tabpanels components
