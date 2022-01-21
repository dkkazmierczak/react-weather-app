import React from "react"

import "./Footer.css"

const Footer = () => {
  return (
    <div className="Footer">
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
          href="https://distracted-meitner-90e4b9.netlify.app/"
          target="_blank"
          rel="noreferrer"
          title="Link to Portfolio"
          className="footerLink">
          Dominika Kaźmierczak
        </a>
      </h6>
    </div>
  )
}

export default Footer
