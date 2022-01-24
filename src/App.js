import React from "react"
import Weather from "./Weather"
import ForecastHourly from "./ForecastHourly/ForecastHourly"
import ForecastDaily from "./ForecastDaily/ForecastDaily"
import Footer from "./Footer"

import "./App.css"

const App = () => {
  return (
    <div className="App">
      <div className="container container-app">
        <Weather defaultCity="Koszalin" />
        <ForecastHourly />
        <ForecastDaily />
        <Footer />
      </div>
    </div>
  )
}
export default App
