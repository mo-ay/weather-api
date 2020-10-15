import React, { Component } from "react";
import Search from "./components/Search";

import SayHi, { SayHello } from "./components/WeatherItem";
import fakeWeatherData from "./fakeWeatherData.json";
import clear from "./img/weather-icons/clear.svg";
import cloudy from "./img/weather-icons/cloudy.svg";
import drizzle from "./img/weather-icons/drizzle.svg";
import fog from "./img/weather-icons/fog.svg";
import mostlycloudy from "./img/weather-icons/mostlycloudy.svg";
import partlycloudy from "./img/weather-icons/partlycloudy.svg";
import rain from "./img/weather-icons/rain.svg";
import snow from "./img/weather-icons/snow.svg";
import storm from "./img/weather-icons/storm.svg";
import unknown from "./img/weather-icons/unknown.svg";
import "./App.css";


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Mostafa"
    };
  }

  handleInputChange = value => {
    this.setState({ name: value });
  };
 

  render() {
    return (
      <div className="app">

    {/*<SayHello color="black" name={this.state.name} />*/}
        {/*<Search handleInput={this.handleInputChange}/>*/}
        <div className="search">
          <input type="text"
          id="searchfi"/>
          <button id="serBtn">FIND WEATHER</button>
        </div>
        <main id="mai">
        <div className="dayWither">
          <img className="state" src={clear} alt="Logo" width="150px" />
          <h4 className="statusWriten"> Clear </h4>
          <h4 className="tempday">Tempereture 10 to 11</h4>
          <p > Humidity <span id="humidity">20%</span> Pressure <span id="pressure">1000</span> </p>
        </div>
        <div className="dayWither restofday">
          <ul className="clocks">
            <li>
              first
            </li>
            <li>
              second
            </li>
            <li>
              third
            </li>
            <li>
              fourth
            </li>
            <li>
              fith
            </li>
            <li>
              sixth
            </li>
            <li>
              seventh
            </li>
          </ul>
          <ul className="status">
            <li><img src={rain}/></li>
            <li><img src={rain}/></li>
            <li><img src={rain}/></li>
            <li><img src={rain}/></li>
            <li><img src={rain}/></li>
            <li><img src={rain}/></li>
            <li><img src={rain}/></li>
          </ul>
          <ul className="temp">
          <li>
              10 <span>&#8451;</span>
            </li>
            <li>
              12 <span>&#8451;</span>
            </li>
            <li>
            10 <span>&#8451;</span>
            </li>
            <li>
             9 <span>&#8451;</span>
            </li>
            <li>
             10 <span>&#8451;</span>
            </li>
            <li>
             9 <span>&#8451;</span>
            </li>
            <li>
             10 <span>&#8451;</span>
            </li>
          </ul>

        </div>
        </main>
      </div>
    );
  }
}

export default App;
