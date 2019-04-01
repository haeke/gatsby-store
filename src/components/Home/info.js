import React from "react"
import { Link } from "gatsby"

import Title from "../globals/Title"

const Info = () => {
  return (
    <section className="py-5">
      <div className="container">
        <Title title="Our Story" />
        <div className="row">
          <div className="col-10 col-sm-8 mx-auto text-center">
            <p className="lead text-muted mb-5">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus
              excepturi quis accusantium esse, deserunt non nisi ullam odio
              voluptate facilis vitae quasi minus consequuntur omnis. Eligendi
              provident facere quibusdam vitae.
            </p>
            <Link to="/about">
              <button className="btn text-uppercase btn-yellow">
                About Us
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Info
