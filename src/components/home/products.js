import React from "react"

import Product from "./product"
import Title from "../globals/title"
import { StaticQuery, graphql } from "gatsby"

const getProducts = graphql`
  {
    products: allContentfulCoffeeProduct {
      edges {
        node {
          id
          title
          price
          image {
            fluid(maxHeight: 420) {
              src
              ...GatsbyContentfulFluid_tracedSVG
            }
          }
        }
      }
    }
  }
`

const Products = () => {
  return (
    <StaticQuery
      query={getProducts}
      render={data => {
        return (
          <section className="py-5">
            <div className="container">
              <Title title="Products" />
              <div className="row">
                {/* the list of products */}
                {data.products.edges.map(({ node: product }) => (
                  <Product key={product.id} product={product} />
                ))}
              </div>
            </div>
          </section>
        )
      }}
    />
  )
}

export default Products
