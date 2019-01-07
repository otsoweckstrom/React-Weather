import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Tampere.css";

class Tampere extends Component {
  render() {
    return (
      <body className="Tampere">
        <h1 className="Transp">filleri</h1>
        <h1 className="Tekstit">Tampere</h1>
        <p className="Sää">-1°C</p>
        <p className="Info">Snowy</p>
      </body>
    );
  }
}

export default Tampere;
