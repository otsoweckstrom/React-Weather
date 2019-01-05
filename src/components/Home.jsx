import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./Home.css";
import "./Jumbotron.css";

class Home extends Component {
  render() {
    return (
      <Grid className="Home">
        <h1>Tämä on kotisivu</h1>
        <h2>
          Valitse jokin teknillisistä yliopsitoista nähdäksesi niiden sään
        </h2>
      </Grid>
    );
  }
}

export default Home;
