import React, { useState } from "react"
import Weather from "./Weather"

import "./Navbar.scss"

const Navbar = props => {
  const [city, setCity] = useState(props.defaultCity)
  const [inputCity, setInputCity] = useState("")

  const handleSubmit = event => {
    event.preventDefault()
    setCity(inputCity)
    setInputCity("")
  }

  const handleChange = event => {
    setInputCity(event.target.value)
  }

  return (
    <div className="Navbar">
      <div className="navbar-container">
        <form className="form-inline" onSubmit={handleSubmit}>
          <div className="row justify-content-between">
            <div className="col-10">
              <div className="d-flex flex-row">
                <div className="col-lg-6 col-8">
                  <input
                    className="form-control"
                    type="search"
                    placeholder="Search a city"
                    aria-label="Search"
                    autoComplete="false"
                    autoFocus="on"
                    onChange={handleChange}
                    value={inputCity}
                  />
                </div>
                <div className="d-flex flex-row">
                  <button className="btn btn-info" type="submit">
                    <i className="fas fa-search-location" title="Search"></i>
                  </button>
                  <button type="button" className="btn btn-success d-none">
                    <i className="fas fa-street-view"></i>
                  </button>
                </div>
              </div>
            </div>

            <div className="col-lg-1 col-2 d-none">
              <a
                href="/"
                className="btn btn-info lng-btn"
                role="button"
                title="Polish version">
                PL
              </a>
            </div>
          </div>
        </form>
      </div>
      <Weather city={city} />
    </div>
  )
}

export default Navbar
