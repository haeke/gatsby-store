import React from "react"

import Image from "gatsby-image"

const Product = ({ product }) => {
  return (
    <div className="col-10 col-sm-8 col-md-6 col-lg-4 mx-auto my-3">
      <div className="card" style={{ minHeight: "100%" }}>
        <Image fluid={product.image.fluid} className="card-img-top" />
        <div className="card-body text-center">
          <h6>{product.title}</h6>
          <h6 className="text-yellow">${product.price}</h6>
          <button type="button" className="btn btn-yellow mt-3 text-capitalize">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  )
}

export default Product
