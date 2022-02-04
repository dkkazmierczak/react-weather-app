import React from "react"
import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"

import "./App.scss"

const App = () => {
  return (
    <div className="App">
      <div className="container container-app">
        <Navbar defaultCity="Halden" />
        <Footer />
      </div>
    </div>
  )
}
export default App
