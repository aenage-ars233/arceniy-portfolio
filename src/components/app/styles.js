import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
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