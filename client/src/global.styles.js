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

    /* @media screen and (min-width: 1600px) {
      max-width: 1600px;
      margin: 0 auto;
    } */
  }

  a {
    text-decoration: none;
    color: black;
  }

  #app {
    min-height: 100vh;
    display: grid;
    grid-template-rows: 1fr auto;
  }
`;
