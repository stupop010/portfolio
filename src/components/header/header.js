import React from "react"
import { Link } from "gatsby"

import "./header.scss"

const Header = () => {
  return (
    <header className="header">
      <nav>
        <ul>
          <li>
            <a>home</a>
          </li>
          <li>
            <a>about</a>
          </li>
          <li>
            <a>projects</a>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
