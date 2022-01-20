import React from "react";

export default function Temperature(props) {
  let weatherdata = {
    description: "cloudy",
    icon: "http://openweathermap.org/img/wn/10d@2x.png"
  };
  return (
    <span className="temp-heading">
      <img src={weatherdata.icon} alt={weatherdata.description} width="60" />
      {Math.round(props.temp)}°
    </span>
  );
}