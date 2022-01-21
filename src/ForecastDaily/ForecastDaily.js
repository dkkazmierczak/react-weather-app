import React from "react"
import Heading from "./Heading"
import FormatDay from "../FormatDay"

import "./ForecastDaily.css"

const ForecastDaily = () => {
  let forecastdata = {
    description: "cloudy",
    icon: "http://openweathermap.org/img/wn/10d@2x.png",
    minTemp: 8,
    maxTemp: 10,
  }
  return (
    <div className="ForecastDaily">
      <div className="ForecastDaily-small d-lg-none">
        <Heading />
        <table className="table table-sm d-lg-none shadow">
          <tbody>
            <tr>
              <th className="day">Wednesday</th>
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

      <div className="ForecastDaily-big">
        <div className="row">
          <div className="col-2 d-none d-lg-block info">
            <ul>
              <li className="day">Thursday</li>
              <li>
                <img
                  src={forecastdata.icon}
                  className="df-img-big"
                  alt={forecastdata.description}
                />
              </li>
              <li>
                <div className="row">
                  <div className="col-4 min-temp-daily">8°</div>
                  <div className="col-4">8°</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-2 d-none d-lg-block info">
            <ul>
              <li className="day">Friday</li>
              <li>
                <img
                  src={forecastdata.icon}
                  className="df-img-big"
                  alt={forecastdata.description}
                />
              </li>
              <li>
                <div className="row">
                  <div className="col-4 min-temp-daily">8°</div>
                  <div className="col-4">8°</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-2 d-none d-lg-block info">
            <ul>
              <li className="day">Saturday</li>
              <li>
                <img
                  src={forecastdata.icon}
                  className="df-img-big"
                  alt={forecastdata.description}
                />
              </li>
              <li>
                <div className="row">
                  <div className="col-4 min-temp-daily">8°</div>
                  <div className="col-4">8°</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-2 d-none d-lg-block info">
            <ul>
              <li className="day">Sunday</li>
              <li>
                <img
                  src={forecastdata.icon}
                  className="df-img-big"
                  alt={forecastdata.description}
                />
              </li>
              <li>
                <div className="row">
                  <div className="col-4 min-temp-daily">8°</div>
                  <div className="col-4">8°</div>
                </div>
              </li>
            </ul>
          </div>
          <div className="col-2 d-none d-lg-block info">
            <ul>
              <li className="day">Monday</li>
              <li>
                <img
                  src={forecastdata.icon}
                  className="df-img-big"
                  alt={forecastdata.description}
                />
              </li>
              <li>
                <div className="row">
                  <div className="col-4 min-temp-daily">8°</div>
                  <div className="col-4">8°</div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ForecastDaily
