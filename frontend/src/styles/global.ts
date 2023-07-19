import { createGlobalStyle } from "styled-components";

// eslint-disable-next-line @typescript-eslint/no-unsafe-call,@typescript-eslint/no-unsafe-assignment
export const GlobalStyle = createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  body {
    padding: 0;
    margin: 0;
  }
  
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    background-color: black;
    color: white;
  }
`;
