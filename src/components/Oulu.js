import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
//import "./Oulu.css";
import "./Jumbotron.css";

class Oulu extends Component {
  render() {
    return (
      <Grid className="Oulu">
        <h1>Tämä on Oulu</h1>
        <h2>Tässä on Oulun sää!</h2>
        <h3>PS. Oulu pilaa aina kaiken</h3>
      </Grid>
    );
  }
}

export default Oulu;
