import React from "react";
import Navbar from "./Navbar";
import Heading from "./Heading/Heading";
import WeatherInfo from "./WeatherInfo/WeatherInfo";
import ForecastHourly from "./ForecastHourly/ForecastHourly";
import ForecastDaily from "./ForecastDaily/ForecastDaily";
import Footer from "./Footer";

import "./App.css";

const App = () => {
  const weatherData = {
    city: "Halden",
    temp: 13,
    feelsLike: 10,
    maxTemp: 13,
    minTemp: 8,
    wind: 5,
    humidity: 80,
    description: "cloudy"
  };

  return (
    <div className="App">
      <div className="container container-app">
        <Navbar />
        <Heading weatherData={weatherData}/>
        <WeatherInfo weatherData={weatherData}/>
        <ForecastHourly />
        <ForecastDaily />
        <Footer />
      </div>
    </div>
  );
};
export default App;
