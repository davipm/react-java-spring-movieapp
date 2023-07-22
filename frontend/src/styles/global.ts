import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
  *, *::before, *::after {
    box-sizing: border-box;
  }
  
  body {
    padding: 0;
    margin: 0;
    font-family: "Noto Sans", sans-serif;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1.5;
    color: var(--bs-black);
    text-align: left;
    background-color: var(--bs-white);
  }
  
  .app {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
    color: var(--bs-white);
    background-color: var(--bs-black);
  }
`;
