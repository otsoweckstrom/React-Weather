import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./LUT.css";
import "./Jumbotron.css";

class Home extends Component {
  render() {
    return (
      <Grid className="Home">
        <h1>Tämä on LUTin sivu</h1>
        <h2>Tässä on Lappeenrannan sää!</h2>
      </Grid>
    );
  }
}

export default Home;
