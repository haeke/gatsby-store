import React from "react"

import Title from "../globals/Title"

const Contact = () => {
  return (
    <section className="contact">
      <Title title="Contact Us" />
      <div className="row">
        <div className="col-10 col-sm-8 col-md-6 mx-auto">
          <form>
            {/* name */}
            <div className="formgroup">
              <label htmlFor="Name">Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="Your Name..."
                name="name"
                id="name"
              />
            </div>
            {/* email */}
            <div className="form-group">
              <label htmlFor="Email">Email</label>
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email address..."
                className="form-control"
              />
            </div>
            {/* message */}
            <div className="form-group">
              <label htmlFor="Message">Message</label>
              <textarea
                className="form-control"
                name="message"
                id="message"
                rows="5"
                placeholder="Your Message..."
              />
            </div>
            {/* Submit Button */}
            <button className="btn btn-block btn-yellow my-3 text-capitalize">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
