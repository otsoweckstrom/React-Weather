import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
//import "./Espoo.css";
import "./Jumbotron.css";

class Espoo extends Component {
  render() {
    return (
      <Grid className="Espoo">
        <h1>Tämä on Espoo</h1>
        <h2>Tässä on Espoon sää!</h2>
      </Grid>
    );
  }
}

export default Espoo;
