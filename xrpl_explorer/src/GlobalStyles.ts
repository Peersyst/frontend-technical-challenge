import { createGlobalStyle } from 'styled-components';

/** *
 * Styled Components Global Styles
 * Using them instead of theme because the project is only focusing on one functionality for now
*/

const GlobalStyle = createGlobalStyle`
  body {
    background-color: black;
    font-style: normal;
    letter-spacing: .5px
    margin: 0;
    padding: 0;
    color: #fff;
    display: block;
    height: 100%;
  }
`;

export default GlobalStyle;