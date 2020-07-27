import React, { useEffect } from "react"
import clsx from "clsx"
import { useInView } from "react-intersection-observer"

import "./about.scss"

const About = () => {
  const [ref, inView, entry] = useInView()

  useEffect(() => {
    if (inView) {
      entry.target.firstChild.classList.add("title-animation")
      entry.target.lastChild.firstChild.classList.add("from-left")
      entry.target.lastChild.lastChild.classList.add("from-right")
    }
  }, [inView])

  return (
    <section class="about" ref={ref}>
      <div className="about-title">
        <h2>about</h2>
        <hr />
      </div>
      <div className="content">
        <div className="my-self">
          <h3 className="subtitle">Hi, I'm Stuart. Nice to meet you.</h3>
          <p>
            I'm a self learned developer. Highly motivated with a passion about
            all things Web development. <br />
            Front-end/Back-end
          </p>
        </div>
        <div className="skills">
          <h3 className="subtitle">Skills</h3>
          <ul>
            <li>CSS</li>
            <li>HTML</li>
            <li>Javascript</li>
            <li>React/Redux</li>
            <li>Node</li>
            <li>SQL</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default About
