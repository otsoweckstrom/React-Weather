import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Vaasa.css";

class Vaasa extends Component {
  render() {
    return (
      <body className="Vaasa">
        <h1 className="Transp">filleri</h1>
        <h1 className="Tekstit">Vaasa</h1>
        <p className="Sää">3°C</p>
        <p className="Info">Rainy</p>
      </body>
    );
  }
}

export default Vaasa;
