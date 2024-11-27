import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  body {
    font-family: 'SejongGeulggot', Arial, sans-serif;
    margin: 0;
    padding: 0;
  }

  * {
    font-family: 'SejongGeulggot', Arial, sans-serif;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;