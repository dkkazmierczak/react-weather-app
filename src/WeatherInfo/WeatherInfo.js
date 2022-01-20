import React from "react";
import MaxTemp from "./MaxTemp";
import MinTemp from "./MinTemp";
import CurrentDate from "./CurrentDate";
import Sky from "./Sky";
import Humidity from "./Humidity";
import Wind from "./Wind";
import FeelsLike from "./FeelsLike";

import "./WeatherInfo.css";

 const WeatherInfo = () => {
  return (
  <div className="WeatherInfo container">
    <div className="row">
      <div className="col-2 d-none d-md-block weather-info bg-color">
        <ul>
          <li>
            <MaxTemp />
          </li>
          <li>
            <MinTemp />
          </li>
        </ul>
      </div>

      <div className="col-2 d-none d-md-block weather-info bg-color">
        <ul>
          <li>
            <CurrentDate />
          </li>
          <li>
            <Sky />
          </li>
        </ul>
      </div>

      <div className="col-2 d-none d-md-block weather-info bg-color">
        <ul>
          <li>
            <Humidity />
          </li>
          <li>
            <Wind />
          </li>
        </ul>
      </div>

    </div>
    <div className="row">
    <div className="col-5 d-md-none weather-info bg-color">
      <div className="row">
        <div className="col-12">
          <ul>
          <li>
            <Sky />
          </li>
          </ul>
          </div>
          <div className="col-12">
            <ul>
          <li>
            <Humidity />
          </li>
          <li>
            <Wind />
          </li>
          </ul>
        </div>
        </div>
      </div>
      <div className="col-5 d-md-none weather-info bg-color">
        <ul>
          <li>
          <FeelsLike />
          </li>
          <li>
            <MaxTemp />
          </li>
          <li>
            <MinTemp />
          </li>
        </ul>
      </div>
      </div>

    </div>
  );
}

export default WeatherInfo;