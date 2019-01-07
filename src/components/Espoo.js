import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Espoo.css";

class Espoo extends Component {
  render() {
    return (
      <body className="Espoo">
        <h1 className="Transp">filleri</h1>
        <h1 className="Tekstit">Espoo</h1>
        <p className="Sää">2°C</p>
        <p className="Info">Foggy</p>
      </body>
    );
  }
}

export default Espoo;
