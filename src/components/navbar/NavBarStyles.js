import styled, { keyframes } from "styled-components";
import fonts from "../../theme/Fonts";
import colors from "../../theme/Colors";
import { NavLink } from "react-router-dom";

const slideIn = keyframes`
  from { transform: translateY(-100%) }
  to { transform: translateY(0) }
`;

export const Header = styled.header`
  transform: translateY(-100%);
  position: fixed;
  width: 100%;
  background-color: #f5f5f4;
  background: radial-gradient(
    circle,
    rgba(245, 245, 244, 0.35) 15%,
    rgba(245, 245, 244, 1) 85%
  );
  z-index: 5;
  padding: 0.8em 2em;
  display: flex;
  justify-content: space-between;
  align-items: center;
  animation: 0.5s ${slideIn} 0.5s ease-out forwards 1;;
`;

export const List = styled.ul`
  display: flex;
`;

export const ListEl = styled.li`
  padding-left: 1em;
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
