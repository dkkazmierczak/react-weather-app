import React from "react"
import "./Navbar.css"

const Navbar = () => {
  return (
    <div className="navbar-container">
      <form className="form-inline">
        <div className="row">
          <div className="col-8">
            <div className="row">
              <div className="col-6">
                <input
                  className="form-control"
                  type="search"
                  placeholder="Search a city"
                  aria-label="Search"
                  autoComplete="false"
                  autoFocus={true}></input>
              </div>
              <div className="col-3">
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

          <div className="col-2">
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
