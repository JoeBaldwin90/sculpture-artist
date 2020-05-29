import styled from "styled-components";
import fonts from "../../theme/Fonts";
import colors from "../../theme/Colors";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 10em 2em;
  background: ${colors.pastelBlue};
`;

export const FooterLinks = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

  div {
    text-align: center;
  }

  h5 {
    font-family: ${fonts.title};
    font-size: 2em;
    color: ${colors.sunbeamGrey};
    margin-bottom: 1.5em;
  }

  p {
    cursor: pointer;
    color: ${colors.sunbeamGrey};
    margin-bottom: 0.5em;
  }
`;
