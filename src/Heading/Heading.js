import React from "react"

import "./Heading.css"

const Heading = props => {
  return (
    <div className="Heading">
      <h1>{props.data.city}</h1>
      <div className="row d-flex justify-content-center temp-heading">
        <div className="col-lg-4 col-12">
          <div className="row justify-content-lg-end justify-content-center">
            <div className="col-lg-2 col-1 p-0">
              <img
                src="http://openweathermap.org/img/wn/10d@2x.png"
                alt={props.data.description}
                className="image"
              />
            </div>
            <div className="col-lg-6 col-3">
              <div className="temperature">
                {Math.round(props.data.temperature)}
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-2 d-none d-lg-flex align-items-end">
          <span className="feelsLike">
            Feels Like : {props.data.feelsLike} °C
          </span>
        </div>
      </div>
    </div>
  )
}
export default Heading
