import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"

import "./App.css"

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
