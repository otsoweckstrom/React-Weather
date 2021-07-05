import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./LUT.css";
//import  Weather  from "Weather";
const API_KEY = "097b1d41353753ec41aa4a754b4a2b32";

class LUT extends Component {
  state = {
    temperature: undefined,
    city: undefined,
    country: undefined,
    humidity: undefined,
    description: undefined,
    error: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = "lappeenranta";
    const country = "finland";
    const api_call = await fetch(
      "http://api.openweathermap.org/data/2.5/weather?q=helsinki,fi&APPID=${API_KEY}"
    );
    const data = await api_call.json();

    if (city && country) {
      this.setState({
        temperature: data.main.temp,
        city: data.name,
        country: data.sys.country,
        humidity: data.main.humidity,
        description: data.weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        temperature: undefined,
        city: undefined,
        country: undefined,
        humidity: undefined,
        description: undefined,
        error: "Please enter the value."
      });
    }
  };

  render() {
    return (
      <body className="LUT">
        <div className="Home" />
      </body>
    );
  }
}

export default LUT;
