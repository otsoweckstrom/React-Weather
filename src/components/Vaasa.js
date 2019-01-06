import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
//import "./Vaasa.css";
import "./Jumbotron.css";

class Vaasa extends Component {
  render() {
    return (
      <Grid className="Vaasa">
        <h1>Tämä on Vaasa</h1>
        <h2>Tässä on Vaasan sää!</h2>
      </Grid>
    );
  }
}

export default Vaasa;
