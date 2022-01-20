import React from "react";

const FeelsLike = () => {
  let weatherdata = {
    city: "Halden",
    temp: 14,
    feelsLike: 10,
    description: "cloudy",
    icon: "http://openweathermap.org/img/wn/10d@2x.png",
    minTemp: 8,
    maxTemp: 10,
    humidity: 90,
    wind: 5
  };
  return (
    <div className="feels-like">
      Feels like {Math.round(weatherdata.feelsLike * 10) / 10}°C
    </div>
  );
}

export default FeelsLike;