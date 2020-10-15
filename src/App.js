import React, { Component } from "react";
import Search from "./components/Search";
import MainWeather from "./components/MainWeather";
import SayHi, { SayHello } from "./components/WeatherItem";

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
       <Search handleInput={this.handleInputChange}/>
        <MainWeather/>
        
      </div>
    );
  }
}

export default App;
