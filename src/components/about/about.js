import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import clsx from "clsx"
import { useInView } from "react-intersection-observer"
import Img from "gatsby-image"

import "./about.scss"

const About = () => {
  const { profilePic } = useStaticQuery(
    graphql`
      query {
        profilePic: file(relativePath: { eq: "profile-pic.png" }) {
          childImageSharp {
            fixed(width: 255, height: 255) {
              ...GatsbyImageSharpFixed_withWebp
            }
          }
        }
      }
    `
  )

  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  })

  return (
    <section id="about">
      <div className="container">
        <div className={clsx("about-title", inView && "on-screen")}>
          <h2>about me</h2>
          <hr />
        </div>
        <div className="content" ref={ref}>
          <div className={clsx("my-self", inView && "on-screen")}>
            <div className="from-right">
              <div className="profile-pic">
                <Img fixed={profilePic.childImageSharp.fixed}></Img>
              </div>
              <p>
                Hi, I'm Stuart Doney. I'm a freelance web designer and
                developer. I design and create beautiful websites, whether you
                need a "brochure" website, a blog, or even an e-commerce store
                to help you and your business reach your goals.
              </p>
            </div>
          </div>
          <div className={clsx("skills", inView && "on-screen")}>
            <div className="from-left">
              <h3 className="subtitle">My Skills</h3>
              <ul>
                <li>CSS</li>
                <li>HTML</li>
                <li>Javascript</li>
                <li>React</li>
                <li>Node</li>
                <li>PHP</li>
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
