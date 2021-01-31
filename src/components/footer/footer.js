import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleUp } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"

import "./footer.scss"

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" })
  }

  return (
    <footer id="footer">
      <div className="scroll-up" onClick={scrollToTop}>
        <FontAwesomeIcon icon={faAngleUp} />
      </div>
      <div>
        <ul className="footer-socials">
          <li>
            <a
              target="_blank"
              href="https://twitter.com/StuartDoney"
              rel="noreferrer"
            >
              <div>
                <FontAwesomeIcon icon={faTwitter} />
              </div>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://github.com/stupop010"
              rel="noreferrer"
            >
              <div>
                <FontAwesomeIcon icon={faGithub} />
              </div>
            </a>
          </li>
          <li>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/stuart-doney-89569b164/"
              rel="noreferrer"
            >
              <div>
                <FontAwesomeIcon icon={faLinkedin} />
              </div>
            </a>
          </li>
        </ul>
        <div className="copyright">
          STUART DONEY <span>&copy;2021</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
