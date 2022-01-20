import React from "react";
import Heading from "./Heading";
import FormatDay from "../FormatDay";

import "./ForecastDaily.css";

export default function ForecastDaily() {
  let forecastdata = {
    description: "cloudy",
    icon: "http://openweathermap.org/img/wn/10d@2x.png",
    minTemp: 8,
    maxTemp: 10
  };
  return (
    <div className="forecast-daily">
      <Heading />
      <table className="table table-sm shadow">
        <tbody>
          <tr>
            <th scope="row">Wednesday</th>
            <td>
              <img
                src={forecastdata.icon}
                className="df-img"
                alt={forecastdata.description}
              />
            </td>
            <td className="min-temp-daily">
              {Math.round(forecastdata.minTemp)}°
            </td>
            <td>{Math.round(forecastdata.maxTemp)}°</td>
          </tr>
          <tr>
            <th scope="row">{FormatDay(1)}</th>
            <td>
              <img
                src={forecastdata.icon}
                className="df-img"
                alt={forecastdata.description}
              />
            </td>
            <td className="min-temp-daily">
              {Math.round(forecastdata.minTemp)}°
            </td>
            <td>{Math.round(forecastdata.maxTemp)}°</td>
          </tr>
          <tr>
            <th scope="row">Friday</th>
            <td>
              <img
                src={forecastdata.icon}
                className="df-img"
                alt={forecastdata.description}
              />
            </td>
            <td className="min-temp-daily">
              {Math.round(forecastdata.minTemp)}°
            </td>
            <td>{Math.round(forecastdata.maxTemp)}°</td>
          </tr>
          <tr>
            <th scope="row">Saturday</th>
            <td>
              <img
                src={forecastdata.icon}
                className="df-img"
                alt={forecastdata.description}
              />
            </td>
            <td className="min-temp-daily">
              {Math.round(forecastdata.minTemp)}°
            </td>
            <td>{Math.round(forecastdata.maxTemp)}°</td>
          </tr>
          <tr>
            <th scope="row">Sunday</th>
            <td>
              <img
                src={forecastdata.icon}
                className="df-img"
                alt={forecastdata.description}
              />
            </td>
            <td className="min-temp-daily">
              {Math.round(forecastdata.minTemp)}°
            </td>
            <td>{Math.round(forecastdata.maxTemp)}°</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
