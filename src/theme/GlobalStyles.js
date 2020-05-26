import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";
import colors from "./Colors";
import fonts from "./Fonts";

const GlobalStyles = createGlobalStyle`
  ${reset}

  * {
    box-sizing: border-box;
  }
  
  body {
    font-size: 16px;
    font-family: ${fonts.body};
    line-height: 1;
    color: ${colors.wetTerracotta};
    background-color: ${colors.sunbeamGrey};
  }

  p {
    line-height: 1.25;
  }
`;

export default GlobalStyles;
