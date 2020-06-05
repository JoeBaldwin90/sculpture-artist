import { NavLink } from "react-router-dom";
import styled from "styled-components";
import fonts from "../../theme/Fonts";
import colors from "../../theme/Colors";

export const Container = styled.div`
  max-width: 1080px;
  margin: 0 auto;
`;

export const WorkNav = styled.nav`
  padding: 8vh 1em 0 1em;
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  grid-gap: 0.5em;
`;

export const WorkLinks = styled.ul`
  grid-column: 2 / span 10;
  display: flex;
  justify-content: space-between;
`;

export const StyledLink = styled(NavLink)`
  text-decoration: none;
  font-size: 1.1em;
  color: ${colors.wetTerracotta};
  font-family: ${fonts.body};
  text-transform: uppercase;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    color: ${colors.coffeeCupBlue};
  }
`;
