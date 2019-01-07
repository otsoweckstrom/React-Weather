import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Tekstit.css";
import "./sijainti.css";

class Home extends Component {
  render() {
    return (
      <body className="Sijainti">
        <h1 className="Transp">filleri</h1>
        <h1 className="Tekstit">Your location</h1>
        <p className="Sää">?°C</p>
        <p className="Info">Rainy</p>
      </body>
    );
  }
}

export default Home;
