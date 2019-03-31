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
  const [navbarOpen, updateNavBar] = useState(false)
  const [cssClasses, updateCSSClasses] = useState("collapse navbar-collapse")
  const [navBarLinks, updateLinks] = useState[links]
  return (
    <nav>
      <h2>Nav Content</h2>
    </nav>
  )
}

export default NavBar
