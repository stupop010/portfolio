import React, { useState, useEffect } from "react"
import { useInView } from "react-intersection-observer"
import clsx from "clsx"

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
  const [error, setError] = useState("")
  const [msgSent, setMsgSent] = useState(false)

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.3,
  })

  // Remove the Msg sent after 3 seconds
  useEffect(() => {
    let timer
    if (msgSent) {
      timer = setTimeout(() => setMsgSent(false), 3000)
    }

    return () => {
      clearTimeout(timer)
    }
  }, [msgSent, setMsgSent])

  const handleChange = e =>
    setValues({ ...values, [e.target.name]: e.target.value })

  const handleSubmit = e => {
    e.preventDefault()

    if (!values.name || !values.email || !values.message) {
      setMsgSent(false)
      setError("Please fill in all fields")
    }

    const form = e.target

    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({
        "form-name": form.getAttribute("name"),
        ...values,
      }),
    })
      .then(() => {
        setError("")
        setMsgSent(true)
        setValues(initialState)
      })
      .catch(error => {
        setMsgSent(false)
        setError(error)
      })
  }

  return (
    <section id="contact" ref={ref}>
      <div className={clsx("container", inView && "contact-in-view")}>
        <div className="contact-title">
          <h2>contact</h2>
          <hr />
        </div>
        <h5 className="touch">Get in touch</h5>
        <div className="email">
          <p>
            Email me:
            <a href="mailto:hello@stuartdoney.co.uk">
              {" "}
              hello@stuartdoney.co.uk
            </a>
          </p>
          <p>or send me a message below</p>
        </div>
        <div className="form">
          {error && <div className="form-msg error">{error}</div>}
          {msgSent && <div className="form-msg success">Message sent</div>}
          <form
            data-netlify="true"
            name="contact"
            method="POST"
            action="/"
            data-netlify-honeypot="bot-field"
            onSubmit={handleSubmit}
          >
            <div className="form-control">
              <label htmlFor="name">
                <input
                  type="text"
                  id="name"
                  placeholder="Name"
                  name="name"
                  value={values.name}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-control">
              <label htmlFor="email">
                <input
                  type="email"
                  id="email"
                  placeholder="Enter Email"
                  name="email"
                  value={values.email}
                  onChange={handleChange}
                />
              </label>
            </div>
            <div className="form-control">
              <label htmlFor="message">
                <textarea
                  type="text"
                  id="message"
                  placeholder="Message"
                  name="message"
                  value={values.message}
                  onChange={handleChange}
                />
              </label>
            </div>

            <button type="submit">Submit</button>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
