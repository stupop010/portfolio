import React, { useEffect, useState, useCallback } from "react"
import clsx from "clsx"
import { Link } from "gatsby"

import "./header.scss"

const Header = ({ height }) => {
  const [fixed, setFixed] = useState(false)

  const handleScroll = useCallback(() => {
    if (window.scrollY > height) setFixed(true)
    if (window.scrollY < 10) setFixed(false)
  }, [height])

  useEffect(() => {
    window.addEventListener("scroll", handleScroll)

    return () => window.addEventListener("scroll", handleScroll)
  }, [handleScroll])

  return (
    <header className={clsx("header", fixed && "header-fixed")}>
      <nav>
        <ul>
          <li>
            <Link to="/" activeClassName="active">
              home
            </Link>
          </li>
          <li>
            <Link to="/#about" activeClassName="active">
              about
            </Link>
          </li>
          <li>
            <Link to="/#projects" activeClassName="active">
              projects
            </Link>
          </li>
          <li>
            <Link to="/blogs" activeClassName="active">
              blog
            </Link>
          </li>
          <li>
            <Link to="/#contact" activeClassName="active">
              contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  )
}

export default Header
