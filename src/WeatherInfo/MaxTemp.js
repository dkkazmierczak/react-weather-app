import React from "react";

const MaxTemp = () => {
  let weatherdata = {
    city: "Halden",
    date: "Tuesday, 14:45",
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
    <div className="max-temp">
      Max : {Math.round(weatherdata.maxTemp * 10) / 10} °C
    </div>
  );
}

export default MaxTemp;