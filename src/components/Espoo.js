import React, { Component } from "react";
import "./Espoo.css";
import { Carousel, CarouselItem } from "react-bootstrap";

class Espoo extends Component {
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
    const city = "espoo";
    const country = "fi";
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/forecast?id=660158&APPID=097b1d41353753ec41aa4a754b4a2b32`
    );
    const data = await api_call.json();
    if (city && country) {
      this.setState({
        day1: data.list[0].dt_txt,
        temperature1: data.list[0].main.temp,
        description1: data.list[0].weather[0].description,
        temperature1b: data.list[2].main.temp,
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
        temperature1: undefined,
        temperature1b: undefined,
        description1: undefined,
        temperature2: undefined,
        description2: undefined,
        temperature3: undefined,
        description3: undefined,
        temperature4: undefined,
        description4: undefined,
        temperature5: undefined,
        description5: undefined,
        error: "Please enter the value."
      });
    }
  };
  render() {
    return (
      <body className="Espoo" onMouseDown={this.getWeather}>
        <h1 className="Transp">l</h1>
        <h1 className="Tekstit">Espoo</h1>
        <Carousel pauseOnHover="true" className="Karuselli">
          <CarouselItem>
            <p className="Päivä">{String(this.state.day1).substring(0, 10)}</p>
            <p className="Sää">
              {Math.round(this.state.temperature1 - 273.15)}°C
            </p>
            <p className="SääB">
              In 6 hours: {Math.round(this.state.temperature1b - 273.15)}°C
            </p>
            <p className="Info">{this.state.description1}</p>
          </CarouselItem>
          <CarouselItem>
            <p className="Päivä">{String(this.state.day2).substring(0, 10)}</p>
            <p className="Sää">
              {Math.round(this.state.temperature2 - 273.15)}°C
            </p>
            <p className="Info">{this.state.description2}</p>
          </CarouselItem>
          <CarouselItem>
            <p className="Päivä">{String(this.state.day3).substring(0, 10)}</p>
            <p className="Sää">
              {Math.round(this.state.temperature3 - 273.15)}°C
            </p>
            <p className="Info">{this.state.description3}</p>
          </CarouselItem>
          <CarouselItem>
            <p className="Päivä">{String(this.state.day4).substring(0, 10)}</p>
            <p className="Sää">
              {Math.round(this.state.temperature4 - 273.15)}°C
            </p>
            <p className="Info">{this.state.description4}</p>
          </CarouselItem>
          <CarouselItem>
            <p className="Päivä">{String(this.state.day5).substring(0, 10)}</p>
            <p className="Sää">
              {Math.round(this.state.temperature5 - 273.15)}°C
            </p>
            <p className="Info">{this.state.description5}</p>
          </CarouselItem>
        </Carousel>
      </body>
    );
  }
}

export default Espoo;
