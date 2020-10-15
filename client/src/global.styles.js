import { createGlobalStyle } from 'styled-components';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Bebas Neue', cursive;
    font-size: 1rem;
    background-color: #fff;
    overflow-y: scroll;
  }

  a {
    text-decoration: none;
    color: black;
  }

  #root {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
  }
`;
