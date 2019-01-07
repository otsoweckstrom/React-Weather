import React, { Component } from "react";
import "./App.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Navbar from "./components/CustomNavbar";
import LUT from "./components/lut";
import Turku from "./components/Turku";
import Espoo from "./components/Espoo";
import Oulu from "./components/Oulu";
import Tampere from "./components/Tampere";
import Vaasa from "./components/Vaasa";
const API_KEY = "097b1d41353753ec41aa4a754b4a2b32";

class App extends Component {
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
    const country = "fi";
    const api_call = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&APPID=${API_KEY}`
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
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Home} />
          <Route path="/Turku" component={Turku} />
          <Route path="/lut" component={LUT} />
          <Route path="/Espoo" component={Espoo} />
          <Route path="/Oulu" component={Oulu} />
          <Route path="/Vaasa" component={Vaasa} />
          <Route path="/Tampere" component={Tampere} />
        </div>
      </Router>
    );
  }
}

export default App;
