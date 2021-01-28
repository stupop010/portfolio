import React, { useEffect, useState } from "react"
import clsx from "clsx"
import { Link } from "gatsby"

import "./header.scss"

const Header = () => {
  const [fixed, setFixed] = useState(false)

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.addEventListener("scroll", handleScroll)
  }, [])

  const handleScroll = () => {
    if (window.scrollY > 950) setFixed(true)
    if (window.scrollY < 10) setFixed(false)
  }

  return (
    <header className={clsx("header", fixed && "header-fixed")}>
      <nav>
        <ul>
          <li>
            <Link to="/">home</Link>
          </li>
          <li>
            <Link to="/#about">about</Link>
          </li>
          <li>
            <Link to="/#projects">projects</Link>
          </li>
          <li>
            <Link to="/blogs">blog</Link>
          </li>
          <li>
            <Link to="/#contact">contact</Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
