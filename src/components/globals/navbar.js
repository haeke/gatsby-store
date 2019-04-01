import React, { useState } from "react"
import { Link } from "gatsby"

import logo from "../../images/logo.svg"
import { FaCartArrowDown } from "react-icons/fa"

const NavBar = () => {
  const links = [
    {
      id: 1,
      path: "/",
      text: "home",
    },
    {
      id: 2,
      path: "/about",
      text: "about",
    },
  ]
  console.log(links)
  const [navBarOpen, updateNavBar] = useState(false)
  const [cssClasses, updateCSSClasses] = useState("collapse navbar-collapse")
  const [navBarLinks, updateLinks] = useState(links)
  function toggleNavBar() {
    console.log("navbar open value: ", navBarOpen)
    updateNavBar(!navBarOpen)
  }
  return (
    <nav className="navbar navbar-expand-sm bg-light navbar-light">
      <Link to="/" className="navbar-brand">
        <img src={logo} alt="logo" />
        {/* https://www.iconfinder.com/icons/185113/coffee_streamline_icon
            Creative Commons (Attribution 3.0 Unported);
            https://www.iconfinder.com/webalys */}
      </Link>
      <button
        className="navbar-toggler navbar-light"
        type="button"
        onClick={toggleNavBar}
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className={`${cssClasses}`}>
        <ul className="navbar-nav mx-auto">
          {navBarLinks.map(navLink => (
            <li className="nav-item" key={navLink.id}>
              <Link className="nav-link text-capitalize" to={navLink.path}>
                {navLink.text}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default NavBar
