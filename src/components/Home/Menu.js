import React, { useState, useEffect } from "react"
import GatsbyImage from "gatsby-image"

import Title from "../globals/title"

// We used a page query to get the list of edges returned from contentful.
const Menu = ({ items }) => {
  const [menuItems, updateMenuItems] = useState([])
  useEffect(() => {
    updateMenuItems(items)
  }, [items])
  if (menuItems.length > 0) {
    return (
      <section className="menu py5">
        <Title title="Menu Items" />
      </section>
    )
  } else {
    return (
      <section className="menu py-5">
        <div className="container">
          <div className="row">
            <div className="col-10 col-sm-6 mx-auto text-center text-capitalize">
              <Title title="Items Coming Soon..." />
            </div>
          </div>
        </div>
      </section>
    )
  }
}

export default Menu
