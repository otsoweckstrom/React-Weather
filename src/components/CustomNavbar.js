import React, { Component } from "react";
import { Navbar, Nav, NavItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import { BrowserRouter } from "react-router-dom";
import "./CustomNavbar.css";
import "./palkki.css";

export default class CustomNavbar extends Component {
  render() {
    return (
      <Navbar default>
        <Navbar.Brand>
          <NavItem eventKey={0} componentClass={Link} href="/" to="/">
            <Link to="/" />
            <a class="hvr-underline-from-center" href="#">
              <img
                src="./assets/home.png"
                class="img-fluid"
                alt="Responsive image"
                height="50px"
              />
            </a>
          </NavItem>
        </Navbar.Brand>
        <Navbar.Collapse>
          <Nav>
            <NavItem eventKey={1} componentClass={Link} href="/" to="/">
              <Link to="/LUT">
                <a class="hvr-underline-from-center" href="#">
                  <img
                    src="./assets/lut.png"
                    class="img-fluid"
                    alt="Responsive image"
                    height="50px"
                  />
                </a>
              </Link>
            </NavItem>
            <NavItem eventKey={2} componentClass={Link} href="/" to="/">
              <Link to="/Turku">
                <a class="hvr-underline-from-center" href="#">
                  <img
                    src="./assets/turku.png"
                    class="img-fluid"
                    alt="Responsive image"
                    height="50px"
                  />
                </a>
              </Link>
            </NavItem>
            <NavItem eventKey={3} componentClass={Link} href="/" to="/">
              <Link to="/Espoo">
                <a class="hvr-underline-from-center" href="#">
                  <img
                    src="./assets/aalto.png"
                    class="img-fluid"
                    alt="Responsive image"
                    height="50px"
                  />
                </a>
              </Link>
            </NavItem>

            <NavItem eventKey={4} componentClass={Link} href="/" to="/">
              <Link to="/Oulu">
                <a class="hvr-underline-from-center" href="#">
                  <img
                    src="./assets/oulu.png"
                    class="img-fluid"
                    alt="Responsive image"
                    height="50px"
                  />
                </a>
              </Link>
            </NavItem>

            <NavItem eventKey={5} componentClass={Link} href="/" to="/">
              <Link to="/Tampere">
                <a class="hvr-underline-from-center" href="#">
                  <img
                    src="./assets/tampere.png"
                    class="img-fluid"
                    alt="Responsive image"
                    height="50px"
                  />
                </a>
              </Link>
            </NavItem>
            <NavItem eventKey={6} componentClass={Link} href="/" to="/">
              <Link to="/Vaasa">
                <a class="hvr-underline-from-center" href="#">
                  <img
                    src="./assets/vaasa.png"
                    class="img-fluid"
                    alt="Responsive image"
                    height="50px"
                  />
                </a>
              </Link>
            </NavItem>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}
