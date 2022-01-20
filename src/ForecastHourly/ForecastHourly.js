import React from "react";
import Heading from "./Heading";

import "./ForecastHourly.css";

const ForecastHourly = () => {
  let forecastdata = {
    temp: 14,
    description: "cloudy",
    icon: "http://openweathermap.org/img/wn/10d@2x.png"
  };
  return (
      <div className="ForecastHourly"> 
      <Heading />
        <div className="table-responsive shadow">
          <table className="table">
            <tbody>
              <tr>
                <td>20:00</td>
                <td>21:00</td>
                <td>22:00</td>
                <td>23:00</td>
                <td>00:00</td>
                <td>01:00</td>
                <td>02:00</td>
                <td>03:00</td>
                <td>04:00</td>
                <td>05:00</td>
              </tr>
              <tr>
                <td>
                  <img
                    src={forecastdata.icon}
                    className="hf-img"
                    alt={forecastdata.description}
                  />
                </td>
                <td>
                  <img
                    src={forecastdata.icon}
                    className="hf-img"
                    alt={forecastdata.description}
                  />
                </td>
                <td>
                  <img
                    src={forecastdata.icon}
                    className="hf-img"
                    alt={forecastdata.description}
                  />
                </td>
                <td>
                  <img
                    src={forecastdata.icon}
                    className="hf-img"
                    alt={forecastdata.description}
                  />
                </td>
                <td>
                  <img
                    src={forecastdata.icon}
                    className="hf-img"
                    alt={forecastdata.description}
                  />
                </td>
                <td>
                  <img
                    src={forecastdata.icon}
                    className="hf-img"
                    alt={forecastdata.description}
                  />
                </td>
                <td>
                  <img
                    src={forecastdata.icon}
                    className="hf-img"
                    alt={forecastdata.description}
                  />
                </td>
                <td>
                  <img
                    src={forecastdata.icon}
                    className="hf-img"
                    alt={forecastdata.description}
                  />
                </td>
                <td>
                  <img
                    src={forecastdata.icon}
                    className="hf-img"
                    alt={forecastdata.description}
                  />
                </td>
                <td>
                  <img
                    src={forecastdata.icon}
                    className="hf-img"
                    alt={forecastdata.description}
                  />
                </td>
              </tr>
              <tr>
                <td>{Math.round(1)}°</td>
                <td>{Math.round(1)}°</td>
                <td>{Math.round(1)}°</td>
                <td>{Math.round(1)}°</td>
                <td>{Math.round(1)}°</td>
                <td>{Math.round(1)}°</td>
                <td>{Math.round(1)}°</td>
                <td>{Math.round(1)}°</td>
                <td>{Math.round(1)}°</td>
                <td>{Math.round(1)}°</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
  );
}

export default ForecastHourly;