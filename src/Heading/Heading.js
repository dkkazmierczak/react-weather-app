import React from "react"
import City from "./City"
import Temperature from "./Temperature"

import "./Heading.css"

const Heading = () => {
  return (
    <div className="Heading">
      <h1>
        <City city="Halden" />
        <br />
        <Temperature temp={14} />
        <span className="units">°C</span>
      </h1>
    </div>
  )
}
export default Heading
