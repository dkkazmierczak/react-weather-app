import React from "react";
import MaxTemp from "./MaxTemp";
import MinTemp from "./MinTemp";
import FeelsLike from "./FeelsLike";
import CurrentDate from "./CurrentDate";
import Sky from "./Sky";
import Humidity from "./Humidity";
import Wind from "./Wind";

import "./WeatherInfo.css";

export default function WeatherInfo() {
  return (
    <div className="row">
      <div className="col-4 weather-info p-0">
        <ul>
          <br />
          <li>
            <MaxTemp />
          </li>
          <li>
            <MinTemp />
          </li>
        </ul>
      </div>

      <div className="col-4 p-0">
        <ul>
          <li>
            <FeelsLike />
          </li>
          <li>
            <CurrentDate />
          </li>
          <li>
            <Sky />
          </li>
        </ul>
      </div>

      <div className="col-4 weather-info p-0">
        <ul>
          <br />
          <li>
            <Humidity />
          </li>
          <li>
            <Wind />
          </li>
        </ul>
      </div>
    </div>
  );
}