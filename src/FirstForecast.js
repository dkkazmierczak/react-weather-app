import React from "react";
import FormatHours from "./FormatHours";

import "./FirstForecast.css";

export default function FirstForecast() {
  let forecastdata = {
    temp: 7,
    description: "cloudy",
    icon: "http://openweathermap.org/img/wn/10d@2x.png"
  };
  let forecastHour = 1;

  return (
    <div className="first-forecast shadow">
      <div className="row px-3 py-0">
        <div className="col p-2">
          <div>{FormatHours(forecastHour)}5:00</div>
          <div>
            <img
              src={forecastdata.icon}
              className="ff-img"
              alt={forecastdata.description}
            />
          </div>
          <div>{forecastdata.temp}°</div>
        </div>
        <div className="col p-2">
          <div>16:00</div>
          <div>
            <img
              src={forecastdata.icon}
              className="ff-img"
              alt={forecastdata.description}
            />
          </div>
          <div>{forecastdata.temp}°</div>
        </div>
        <div className="col p-2">
          <div>17:00</div>
          <div>
            <img
              src={forecastdata.icon}
              className="ff-img"
              alt={forecastdata.description}
            />
          </div>
          <div>{forecastdata.temp}°</div>
        </div>
        <div className="col p-2">
          <div>18:00</div>
          <div>
            <img
              src={forecastdata.icon}
              className="ff-img"
              alt={forecastdata.description}
            />
          </div>
          <div>{forecastdata.temp}°</div>
        </div>
        <div className="col p-2">
          <div>19:00</div>
          <div>
            <img
              src={forecastdata.icon}
              className="ff-img"
              alt={forecastdata.description}
            />
          </div>
          <div>{forecastdata.temp}°</div>
        </div>
      </div>
    </div>
  );
}