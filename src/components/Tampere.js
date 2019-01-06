import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
//import "./Tampere.css";
import "./Jumbotron.css";

class Tampere extends Component {
  render() {
    return (
      <Grid className="Tampere">
        <h1>Tämä on Tampere</h1>
        <h2>Tässä on Tampereen sää!</h2>
      </Grid>
    );
  }
}

export default Tampere;
