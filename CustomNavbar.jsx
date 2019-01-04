import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";

export default class CustomNavbar extends Component {
  render() {
    return (
      <div>
        <BrowserRouter>
          <Navbar defa collapseOnSelect>
            <Navbar.Header>
              <Navbar.Brand>
                <Link to="/">LUT</Link>
              </Navbar.Brand>
              <Navbar.Toggle />
            </Navbar.Header>
            <Navbar.Collapse>
              <Nav pullRIght>
                <NavItem eventKey={1} componentClass={Link} href="/" to="/">
                  Kikkelis
                </NavItem>
                <NavItem eventKey={2} componentClass={Link} href="/" to="/">
                  Kokkelis
                </NavItem>
                <NavItem eventKey={3} componentClass={Link} href="/" to="/">
                  Kikkelis
                </NavItem>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </BrowserRouter>
      </div>
    );
  }
}
