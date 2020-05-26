import React from "react";
import { Header, Nav, List, NavLink } from "./NavBarStyles";

const NavBar = () => (
  <Header>
    <Nav>
      <List>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='/work'>Work</NavLink>
        </li>
        <li>
          <NavLink to='/contact'>Contact</NavLink>
        </li>
      </List>
    </Nav>
  </Header>
);

export default NavBar;
