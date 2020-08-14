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
          {/* <form data-netlify="true" name="contact" method="POST" action="/">
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
          </form> */}
          <form name="contact" method="POST" data-netlify="true">
            <p>
              <label>
                Your Name: <input type="text" name="name" />
              </label>
            </p>
            <p>
              <label>
                Your Email: <input type="email" name="email" />
              </label>
            </p>
            <p>
              <label>
                Your Role:{" "}
                <select name="role[]" multiple>
                  <option value="leader">Leader</option>
                  <option value="follower">Follower</option>
                </select>
              </label>
            </p>
            <p>
              <label>
                Message: <textarea name="message"></textarea>
              </label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

export default Contact
