import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
  }
  *, *::after, *::before {
    box-sizing: border-box;
  }
  body {
    background-color: ${({ theme }) => theme.background};
    height: 100vh;
    justify-content: center;
    text-rendering: optimizeLegibility;
    transition: all 0.5s linear;
  }
  `;
