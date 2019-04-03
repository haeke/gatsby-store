import React from "react"

const Footer = () => {
  return (
    <footer className="footer py-3">
      <div className="container">
        <div className="row">
          <div className="col-10 mx-auto text-yellow text-capitalize">
            <h3>All Rights Reserved &copy; {new Date().getFullYear()} </h3>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
