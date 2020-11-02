import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    * {
        box-sizing: border-box;
    }
    body {
        margin: 0;
        padding: 0;
        background: #e8e8e8;
        font-family: Open-Sans, Helvetica, Sans-Serif;
    }
`;
 
export default GlobalStyle;