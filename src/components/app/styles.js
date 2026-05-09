import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Montserrat";
    src: url("../../assets/fonts/Montserrat-Regular.woff2") format("woff2");
    font-weight: 400;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("../../assets/fonts/Montserrat-Medium.woff2") format("woff2");
    font-weight: 500;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("../../assets/fonts/Montserrat-Semibold.woff2") format("woff2");
    font-weight: 600;
    font-style: normal;
    font-display: swap;
  }

  @font-face {
    font-family: "Montserrat";
    src: url("../../assets/fonts/Montserrat-Bold.woff2") format("woff2");
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
    font-family: "Montserrat", Arial, sans-serif;
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