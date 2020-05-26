import styled from "styled-components";
import fonts from "../../theme/Fonts";
import colors from "../../theme/Colors";
import { Link } from "react-router-dom";

export const Header = styled.header`
  position: fixed;
  width: 100vw;
  background: transparent;
  z-index: 5;
  padding: 1em 2em;
`;

export const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const List = styled.ul`
  display: flex;
  justify-content: flex-end;
`;

export const NavLink = styled(Link)`
  text-decoration: none;
  font-size: 1.25em;
  color: ${colors.sunbeamGrey};
  font-family: ${fonts.body};
  text-transform: uppercase;
  transition: all 0.5s ease;
  cursor: pointer;

  &:hover {
    color: ${colors.coffeeCupBlue};
  }
`;
