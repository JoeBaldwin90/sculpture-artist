import React from "react";
import { Header, List, ListEl, NavLink } from "./NavBarStyles";

const NavBar = () => (
  <Header>
    <div>Signature</div>
    <nav>
      <List>
        <ListEl>
          <NavLink to='/'>Home</NavLink>
        </ListEl>
        <ListEl>
          <NavLink to='/work'>Work</NavLink>
        </ListEl>
        <ListEl>
          <NavLink to='/contact'>Contact</NavLink>
        </ListEl>
      </List>
    </nav>
  </Header>
);

export default NavBar;
