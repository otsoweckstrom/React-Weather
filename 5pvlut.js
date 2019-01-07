import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Jumbotron, Grid, Row, Col, Image, Button } from "react-bootstrap";
import "./LUT.css";
//import  Weather  from "Weather";

class LUT extends Component {
  state = {
    day1: undefined,
    temperature1: undefined,
    description1: undefined,
    day2: undefined,
    temperature2: undefined,
    description2: undefined,
    day3: undefined,
    temperature3: undefined,
    description3: undefined,
    day4: undefined,
    temperature4: undefined,
    description4: undefined,
    day5: undefined,
    temperature5: undefined,
    description5: undefined
  };

  getWeather = async e => {
    e.preventDefault();
    const city = "lappeenranta";
    const country = "fi";
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=648901&APPID=1e58b40bf6024a7d0e6812f844f4417b`
    );
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        day1: data.list[0].dt_txt,
        temperature1: data.list[0].main.temp,
        description1: data.list[0].weather[0].description,
        day2: data.list[8].dt_txt,
        temperature2: data.list[8].main.temp,
        description2: data.list[8].weather[0].description,
        day3: data.list[16].dt_txt,
        temperature3: data.list[16].main.temp,
        description3: data.list[16].weather[0].description,
        day4: data.list[24].dt_txt,
        temperature4: data.list[24].main.temp,
        description4: data.list[24].weather[0].description,
        day5: data.list[32].dt_txt,
        temperature5: data.list[32].main.temp,
        description5: data.list[32].weather[0].description,
        error: ""
      });
    } else {
      this.setState({
        day1: undefined,
        temperature1: undefined,
        description1: undefined,
        day2: undefined,
        temperature2: undefined,
        description2: undefined,
        day3: undefined,
        temperature3: undefined,
        description3: undefined,
        day4: undefined,
        temperature4: undefined,
        description4: undefined,
        day5: undefined,
        temperature5: undefined,
        description5: undefined,
        error: "Please enter the value."
      });
    }
  };
  render() {
    return (
      <body className="LUT" onMouseMove={this.getWeather}>
        <p>{this.state.day1}</p>
        <p>{this.state.temperature1}</p>
        <p>{this.state.description1}</p>
        <p>{this.state.day2}</p>
        <p>{this.state.temperature2}</p>
        <p>{this.state.description2}</p>
        <p>{this.state.day3}</p>
        <p>{this.state.temperature3}</p>
        <p>{this.state.description3}</p>
        <p>{this.state.day4}</p>
        <p>{this.state.temperature4}</p>
        <p>{this.state.description4}</p>
        <p>{this.state.day5}</p>
        <p>{this.state.temperature5}</p>
        <p>{this.state.description5}</p>
      </body>
    );
  }
}

export default LUT;
