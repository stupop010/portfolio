import React, { useState } from "react"
import { navigate } from "gatsby-link"

import "./contact.scss"

// Function from Netlify for the form
function encode(data) {
  return Object.keys(data)
    .map(key => encodeURIComponent(key) + "=" + encodeURIComponent(data[key]))
    .join("&")
}

const initialState = {
  name: "",
  email: "",
  message: "",
}

const Contact = () => {
  const [values, setValues] = useState(initialState)

  const handleChange = e =>
    setValues({ ...values, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()
    const form = e.target
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...values,
      }),
    })
      .then(() => navigate(form.getAttribute("action")))
      .catch(error => alert(error))
  }

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
            onSubmit={handleSubmit}
          >
            {/* <input type="hidden" name="form-name" value="contact" /> */}
            <div className="form-control">
              <label htmlFor="name" />
              <input
                type="text"
                id="name"
                placeholder="Name"
                name="name"
                value={values.name}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="email" />
              <input
                type="email"
                id="email"
                placeholder="Enter Email"
                name="email"
                value="email"
                value={values.email}
                onChange={handleChange}
              />
            </div>
            <div className="form-control">
              <label htmlFor="message" />
              <textarea
                type="text"
                id="message"
                placeholder="Message"
                name="message"
                value={values.message}
                onChange={handleChange}
              />
            </div>
            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
