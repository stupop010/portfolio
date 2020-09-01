import React from "react"
import clsx from "clsx"
import { useInView } from "react-intersection-observer"

import "./about.scss"

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="about">
      <div className="container">
        <div className={clsx("about-title", inView && "on-screen")}>
          <h2>about</h2>
          <hr />
        </div>
        <div className="content" ref={ref}>
          <div className={clsx("my-self", inView && "on-screen")}>
            <div className="from-right">
              <h3 className="subtitle">Hi, I'm Stuart. Nice to meet you.</h3>
              <p>
                I'm a self learned developer. Highly motivated with a passion
                about all things web development. <br />
                Front-end/Back-end
              </p>
            </div>
          </div>
          <div className={clsx("skills", inView && "on-screen")}>
            <div className="from-left">
              <h3 className="subtitle">Skills</h3>
              <ul>
                <li>CSS</li>
                <li>HTML</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Node</li>
                <li>SQL</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default About
