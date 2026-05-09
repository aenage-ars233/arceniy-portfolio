import { createGlobalStyle } from "styled-components";
import MontserratRegular from "../../assets/fonts/Montserrat-Regular.woff";
import MontserratMedium from "../../assets/fonts/Montserrat-Medium.woff";
import MontserratSemiBold from "../../assets/fonts/Montserrat-SemiBold.woff";
import MontserratBold from "../../assets/fonts/Montserrat-Bold.woff";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Montserrat";
    src: url("${MontserratRegular}") format("woff");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("${MontserratMedium}") format("woff");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("${MontserratSemiBold}") format("woff");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("${MontserratBold}") format("woff2");
    font-weight: 700;
    font-style: normal;
    font-display: swap;
  }

  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
  }
 
  body {
    min-width: 320px;
    height: 100%;
    margin: 0;
    background-color: #ffffff;
    font-family: "Montserrat", "Arial", sans-serif;
    color: #333333;
  }

  img {
    max-width: 100%;
    object-fit: contain;
  }

  a {
    text-decoration: none;
  }

  .visually-hidden {
    position: absolute;
    opacity: 0;
    width: 1px;
    height: 1px;
    clip-path: rect(0 0 0 0);
  }
`;