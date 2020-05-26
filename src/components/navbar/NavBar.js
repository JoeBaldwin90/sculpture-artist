import React from "react";
import { Link } from "react-router-dom";
import colors from "../../theme/Colors";
import { Header, List, ListEl, StyledLink } from "./NavBarStyles";
import Signature from './Signature';

const activeStyles = {
    color: `${colors.coffeeCupBlue}`
}

const NavBar = () => (
  <Header>
    <Link exact to='/' style={{ textDecoration: "none" }}>
      <Signature />
    </Link>

    <nav>
      <List>
        <ListEl>
          <StyledLink exact to='/' activeStyle={activeStyles}>
            Home
          </StyledLink>
        </ListEl>
        <ListEl>
          <StyledLink exact to='/work' activeStyle={activeStyles}>
            Work
          </StyledLink>
        </ListEl>
        <ListEl>
          <StyledLink exact to='/contact' activeStyle={activeStyles}>
            Contact
          </StyledLink>
        </ListEl>
      </List>
    </nav>
  </Header>
);

export default NavBar;
