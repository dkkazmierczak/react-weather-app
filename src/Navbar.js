import React from "react"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="Navbar">
      <form className="form-inline">
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
                  autoFocus="on"></input>
              </div>
              <div className="d-flex flex-row">
                <button className="btn btn-outline-info" type="submit">
                  <i className="fas fa-search-location" title="Search"></i>
                </button>
                <button
                  type="button"
                  className="btn btn-outline-success d-none d-md-block">
                  <i className="fas fa-street-view"></i>
                </button>
              </div>
            </div>
          </div>

          <div className="col-lg-1 col-2">
            <a
              href="/"
              className="btn btn-outline-info lng-btn"
              role="button"
              title="Polish version">
              PL
            </a>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Navbar
