import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Turku.css";

class Turku extends Component {
  render() {
    return (
      <body className="Turku">
        <h1 className="Transp">filleri</h1>
        <h1 className="Tekstit">Turku</h1>
        <p className="Sää">0°C</p>
        <p className="Info">Rainy</p>
      </body>
    );
  }
}

export default Turku;
