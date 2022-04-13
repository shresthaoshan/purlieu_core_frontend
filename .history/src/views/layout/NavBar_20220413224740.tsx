import LogoImg from "../../assets/Logo.png";
import styled from "styled-components";
import {
  Bars,
  ItemsLi,
  Logo,
  LogoAndName,
  Navbar,
  NavBarContainer,
  NavRightUl,
  PurlieuLabel,
} from "../styles/styles";
import { useNavigate } from "react-router-dom";

export const NavBar = () => {
  return (
    <NavBarContainer>
      <Navbar>
        <LogoAndName>
          <Logo src={LogoImg} alt="logo" />
          <PurlieuLabel>Purlieu</PurlieuLabel>
        </LogoAndName>
        <Bars />
        <NavRightUl>
          <ItemsLi onClick={() => navigate("/dashboard")}>DashBoard</ItemsLi>
          <ItemsLi onClick={() => navigate("/login")}>Signup / Login</ItemsLi>
        </NavRightUl>
      </Navbar>
    </NavBarContainer>
  );
};

//end of footer section
