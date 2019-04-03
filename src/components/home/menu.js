import React, { useState, useEffect } from "react"
import Image from "gatsby-image"

import Title from "../globals/title"

// We used a page query to get the list of edges returned from contentful.
const Menu = ({ items }) => {
  /// the list of items that we will display when we filter items
  const [menuItems, updateMenuItems] = useState(items.edges)
  // the list of all the menu items
  const [allItems, updateAllItems] = useState(items.edges)
  // the filtered list of categories
  const [categories, updateCategories] = useState(getCategories(items.edges))
  useEffect(() => {
    updateMenuItems(items.edges)
  }, [items.edges])

  function getCategories(items) {
    let tempItems = items.map(item => {
      return item.node.category
    })
    // We want to create an array of unique items inside of the items array.
    let tempCategories = new Set(tempItems)
    // Create an array from the Set
    let categories = Array.from(tempCategories)
    // Add the call category that we will use to filter the list of items.
    categories = ["all", ...categories]
    return categories
  }

  const handleCategoryClick = category => {
    console.log("clicked on a category", category)
    // We pass all the items into a temporary array to either filter by a category or display all items.
    let tempItems = [...allItems]
    if (category === "all") {
      updateMenuItems(allItems)
    } else {
      // Will filter the tempItems array by the category, node is returned from the page query run inside of index
      let items = tempItems.filter(({ node }) => node.category === category)
      updateMenuItems(items)
    }
  }

  if (menuItems.length > 0) {
    return (
      <section className="menu py-5">
        <Title title="Menu Items" />
        {/* categories filter */}
        <div className="row">
          <div className="col mx-auto text-center">
            {categories.map((item, index) => (
              <button
                type="button"
                key={index}
                className="btn btn-yellow text-capitalize m-3"
                onClick={() => handleCategoryClick(item)}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        <div className="container">
          <div className="row">
            {menuItems.map(({ node }) => (
              <div
                key={node.id}
                className="col-10 col-md-6 my-3 d-flex mx-auto"
              >
                <div>
                  <Image fixed={node.image.fixed} />
                </div>
                {/* menu item information */}
                <div className="flex-grow-1 px-3">
                  <div className="d-flex justify-content-between">
                    <h6 className="mb-0">
                      <small>{node.title}</small>
                    </h6>
                    <h6 className="mb-0 text-yellow">
                      <small>${node.price}</small>
                    </h6>
                  </div>
                  <p className="text-muted">
                    <small>{node.description.description}</small>
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
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
