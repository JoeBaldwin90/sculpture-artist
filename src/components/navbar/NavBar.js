import React from "react";
import { NavLink } from "react-router-dom";
import colors from "../../theme/Colors";
import { Header, List, ListEl, StyledLink } from "./NavBarStyles";
import Signature from "./Signature";

const activeStyles = {
  color: `${colors.coffeeCupBlue}`,
};

const NavBar = () => {
  return (
    <Header>
      <NavLink exact to='/' style={{ textDecoration: "none" }}>
        <Signature />
      </NavLink>
      <nav>
        <List>
          {[["work", "work/figurative"], ["contact", "contact"]].map((link, i) => (
            <ListEl key={i}>
              <StyledLink
                exact
                to={`/${link[1]}`}
                activeStyle={activeStyles}
              >
                {link[0]}
              </StyledLink>
            </ListEl>
          ))}
        </List>
      </nav>
    </Header>
  );
};

export default NavBar;
