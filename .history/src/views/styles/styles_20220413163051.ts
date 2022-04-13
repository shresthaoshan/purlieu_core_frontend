import styled, { createGlobalStyle } from "styled-components";
import { FaBars } from "react-icons/fa";

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        /* background-color: black; */

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
    /* .react-tabs [role=tab]:focus {
    box-shadow: none;
    border-color: none;
    border-bottom-color: $yourColor;
    outline: none;
  }

  .react-tabs [role=tab]:focus:after{
    content: "";
    position: absolute;
    height: 5px;
    left: -4px;
    right: -4px;
    bottom: -5px;
    background: transparent; 
  } */

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
  /* display: flex; */
  /* @media screen and (max-width: 1000px) { */
  /* display: none; */
  /* flex-direction: column; */
  /* align-items: center; */
  /* } */
`;
export const LabelInput = styled.input`
  width: 100%;
  padding: 0.5rem;
  margin-bottom: 1.5rem;
  color: #272b30;
  outline: none;
  font-weight: bold;
  height: 2.2rem;
`;
export const CardDetailsLabel = styled.span`
  color: var(--main-black-grey);
  font-size: 18px;
  margin-bottom: 1.5rem;
`;

export const SignUpContainer = styled.div`
  /* background-color: black; */
  /* border-radius: 2px; */
  border: 1px solid grey;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  /* height: 5rem; */
`;
export const SignInBtn = styled.button`
  width: 100%;
  background-color: #4bfa71;
  border: none;
  color: white;
`;
export const SignUpWithGoogle = styled.button`
  background-color: #4ba6fa;
  border: none;
  color: white;
  width: 100%;
`;
// end of signUp  section

//footer section

export const FooterContainer = styled.div`
  /* position: fixed; */
  /* bottom: 0; */
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
  /* font-weight: 100; */

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
