import styled, { createGlobalStyle } from "styled-components";
import { FaBars } from "react-icons/fa";

export const GlobalStyles = createGlobalStyle`
    *{
        box-sizing: border-box;
        background-color: black;

    }
    :root{
        --main-green: #4BFA71;
        --main-black-grey: #35495E;
        --main-grey : #35495E;

    }
    body{
        margin: 0;
        padding: 0;
        font-family: 'Montserrat', sans-serif;
    }
`;
