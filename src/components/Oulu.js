import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Oulu.css";

class Oulu extends Component {
  render() {
    return (
      <body className="Oulu">
        <h1 className="Transp">filleri</h1>
        <h1 className="Tekstit">Oulu</h1>
        <p className="Sää">-5°C</p>
        <p className="Info">Snowy</p>
      </body>
    );
  }
}

export default Oulu;
