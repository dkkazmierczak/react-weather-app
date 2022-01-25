import React from "react"
import Navbar from "./Navbar"
import ForecastHourly from "./ForecastHourly/ForecastHourly"
import ForecastDaily from "./ForecastDaily/ForecastDaily"
import Footer from "./Footer"

import "./App.css"

const App = () => {
  return (
    <div className="App">
      <div className="container container-app">
        <Navbar defaultCity="Halden" />
        <ForecastHourly />
        <ForecastDaily />
        <Footer />
      </div>
    </div>
  )
}
export default App
