import React from "react";
import { NavLink } from "react-router-dom";
import { Navbar, NavItem, Collapse, Nav } from "reactstrap";

const Layout = (props) => {
  return (
    <div>
      <Navbar color="light" expand="md" light className="mb-4">
        <NavLink className="navbar-brand" to="/">
          JsonPlaceholderProject
        </NavLink>
        <Collapse navbar>
          <Nav>
            <NavItem>
              <NavLink className="nav-link" to="/users">
                Users
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink className="nav-link" to="/posts">
                Posts
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      {props.children}
    </div>
  );
};

export default Layout;
