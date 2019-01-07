import React, { Component } from "react";
import "./Tekstit.css";
import "./sijainti.css";
import { Carousel, CarouselItem } from "react-bootstrap";

class Home extends Component {
  render() {
    return (
      <body className="Sijainti">
        <h1 className="Transp">l</h1>
        <h1 className="Tekstit">Your location</h1>
        <Carousel pauseOnHover="true" className="Karuselli">
          <CarouselItem>
            <p className="Päivä">Date</p>
            <p className="Sää">-1°C</p>
            <p className="Info">Snowy</p>
          </CarouselItem>
          <CarouselItem>
            <p className="Päivä">Date</p>
            <p className="Sää">-1°C</p>
            <p className="Info">Snowy</p>
          </CarouselItem>
          <CarouselItem>
            <p className="Päivä">Date</p>
            <p className="Sää">-1°C</p>
            <p className="Info">Snowy</p>
          </CarouselItem>
        </Carousel>
      </body>
    );
  }
}

export default Home;
