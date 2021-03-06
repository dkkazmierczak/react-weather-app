import React from "react"

import "./Footer.scss"

const Footer = () => {
  return (
    <footer className="Footer">
      <h6>
        <a
          href="https://github.com/dkkazmierczak/react-weather-app"
          target="_blank"
          rel="noreferrer"
          title="Link to GitHub"
          className="footerLink">
          Open-source code{" "}
        </a>
        by{" "}
        <a
          href="https://www.dkkazmierczak.com/index.html"
          target="_blank"
          rel="noreferrer"
          title="Link to Portfolio"
          className="footerLink">
          Dominika Kaźmierczak
        </a>
      </h6>
    </footer>
  )
}

export default Footer
