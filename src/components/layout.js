import React from "react"
import { Link } from "gatsby"
import "./styles.css"
import Logo from "./logo"

export default ({ children }) => {

  return (
    <div>
      <div className="triangle"></div>
      <header>
        <Link to={`/`}>
          <Logo />
        </Link>
      <nav>
        <Link to={`/prompter/`}>Prompter</Link>
        <Link to={`/services/`}>Services</Link>
        <Link to={`/photos/`}>Photos</Link>
        <Link to={`/testimonials/`}>Testimonials</Link>
        <Link to={`/contact/`}>Contact</Link>
      </nav>
      </header>
      {children}
    </div>
  )
}
