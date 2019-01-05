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

class App extends Component {
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
