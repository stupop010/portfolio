import React from "react"
import {
  faLinkedin,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

import "./social-links.scss"

const SocialLinks = () => (
  <div className="social-links">
    <ul>
      <li>
        <a
          target="_blank"
          href="https://twitter.com/StuartDoney"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </li>
      <li>
        <a target="_blank" href="https://github.com/stupop010" rel="noreferrer">
          <FontAwesomeIcon icon={faGithub} size="2x" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          href="https://www.linkedin.com/in/stuart-doney-89569b164/"
          rel="noreferrer"
        >
          <FontAwesomeIcon icon={faLinkedin} size="2x" />
        </a>
      </li>
    </ul>
  </div>
)

export default SocialLinks
