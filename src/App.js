import React from "react";
import Navbar from "./Navbar";
import Heading from "./Heading/Heading";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import FirstForecast from "./FirstForecast";
import ForecastHourly from "./ForecastHourly/ForecastHourly";
import ForecastDaily from "./ForecastDaily/ForecastDaily";
import Footer from "./Footer";

import "./App.css";

const App = () => {
  let weatherData = {
    city: "Halden",
    temp: 13,
    wind: 5,
    humidity: 80,
    description: "cloudy"
  };

  return (
    <div className="App">
      <div className="container">
        <Navbar />
        <Heading />
        <WeatherInfo />
        <FirstForecast />
        <ForecastHourly />
        <ForecastDaily />
        <Footer />
      </div>
    </div>
  );
};
export default App;
