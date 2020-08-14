import React from "react"

import "./contact.scss"

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <div className="contact-title">
          <h2>contact</h2>
          <hr />
        </div>
        <div className="form">
          <h5>Get in touch</h5>
          <form
            data-netlify="true"
            name="contact"
            method="POST"
            action="/"
            data-netlify-honeypot="bot-field"
          >
            <input type="hidden" name="form-name" value="contact" />
            <div className="form-control">
              <label htmlFor="name" />
              <input type="text" id="name" placeholder="Name" />
            </div>
            <div className="form-control">
              <label htmlFor="email" />
              <input type="email" id="email" placeholder="Enter Email" />
            </div>
            <div className="form-control">
              <label htmlFor="message" />
              <textarea type="text" id="message" placeholder="Message" />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
