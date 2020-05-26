import React from "react";
import { Link } from "react-router-dom";
import colors from "../../theme/Colors";
import { Header, List, ListEl, StyledLink } from "./NavBarStyles";
import Signature from "./Signature";

const activeStyles = {
  color: `${colors.coffeeCupBlue}`,
};

const NavBar = () => {

  return (
    <Header>
      <Link exact to='/' style={{ textDecoration: "none" }}>
        <Signature />
      </Link>
      <nav>
        <List>
          {["Home", "Work", "Contact"].map((link, i) => (
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
