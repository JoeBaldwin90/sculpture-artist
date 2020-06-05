import { Link } from "react-router-dom";
import styled from "styled-components";
import fonts from "../../theme/Fonts";
import colors from "../../theme/Colors";

export const FooterContainer = styled.footer`
  width: 100%;
  padding: 10em 2em;
  background: ${colors.pastelBlue};
  @media (max-width: 425px) {
    padding: 3em 1em;
  }
`;

export const FooterLinks = styled.div`
  max-width: 1080px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;

  div {
    text-align: center;
    margin-bottom: 1.5em;
    &:last-of-type {
      margin-bottom: 0;
    }
  }

  h5 {
    font-family: ${fonts.title};
    font-size: 2em;
    color: ${colors.sunbeamGrey};
    margin-bottom: 1.5em;

    @media (max-width: 425px) {
      font-size: 1.5em;
      margin-bottom: 0.5em;
    }
  }

  p,
  li {
    color: ${colors.sunbeamGrey};
    margin-bottom: 0.5em;
    line-height: 1.2;
  }

  @media (max-width: 425px) {
    flex-direction: column;
  }
`;

export const RouteLink = styled(Link)`
  text-decoration: none;
  color: ${colors.sunbeamGrey};
  font-family: ${fonts.body};
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    color: ${colors.coffeeCupBlue};
  }
`;

export const ExternalLink = styled.a`
  text-decoration: none;
  color: ${colors.sunbeamGrey};
  font-family: ${fonts.body};
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    color: ${colors.coffeeCupBlue};
  }
`;
