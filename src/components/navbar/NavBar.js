import React from "react";
import { NavLink } from "react-router-dom";
import colors from "../../theme/Colors";
import { Header, List, ListEl, StyledLink } from "./NavBarStyles";
import Signature from "./Signature";

const activeStyles = {
  color: `${colors.coffeeCupBlue}`,
};

const NavBar = () => {
  const headerLinks = ["work", "contact"]
  return (
    <Header>
      <NavLink exact to='/' style={{ textDecoration: "none" }}>
        <Signature />
      </NavLink>
      <nav>
        <List>
          {headerLinks.map((link, i) => (
            <ListEl key={i}>
              <StyledLink exact to={`/${link}`} activeStyle={activeStyles}>
                {link}
              </StyledLink>
            </ListEl>
          ))}
        </List>
      </nav>
    </Header>
  );
};

export default NavBar;
