import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
//import "./Turku.css";
import "./Jumbotron.css";

class Turku extends Component {
  render() {
    return (
      <Grid className="Turku">
        <h1>Tämä on Turku</h1>
        <h2>Tässä on Turun sää!</h2>
      </Grid>
    );
  }
}

export default Turku;
