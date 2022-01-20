import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar-container">
      <nav className="navbar search-navbar my-2">
        <form className="form-inline">
          <li>
            <input
              className="form-control"
              type="search"
              placeholder="Search city"
              aria-label="Search"
              autoComplete={false}
              autoFocus={true}
            ></input>
          </li>
          <li>
            <button className="btn btn-outline-info" type="submit">
              <i className="fas fa-search-location" title="Search"></i>
            </button>
          </li>
          <li>
            <button
              type="button"
              className="btn btn-outline-success d-none d-md-block"
            >
              <i className="fas fa-street-view"></i>
            </button>
          </li>
        </form>
        <a
          href="../weather-app-pl/index.html"
          className="btn btn-outline-info lng-btn"
          role="button"
          title="Polish version"
        >
          PL
        </a>
      </nav>
    </div>
  );
}
