import React from "react";
import { Header, List, ListEl, StyledLink } from "./NavBarStyles";
import colors from "../../theme/Colors";

const activeStyles = {
    color: `${colors.coffeeCupBlue}`
}

const NavBar = () => (
  <Header>
    <div>Signature</div>
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
