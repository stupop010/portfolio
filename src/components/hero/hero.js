import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import {
  faLinkedin,
  faGithubSquare,
  faTwitter,
  faGithub,
} from "@fortawesome/free-brands-svg-icons"
import BackgroundImage from "gatsby-background-image"

import "./hero.scss"

const Hero = () => {
  const { heroBackground } = useStaticQuery(
    graphql`
      query {
        heroBackground: file(relativePath: { eq: "hero-background.jpg" }) {
          childImageSharp {
            fluid(maxWidth: 1800) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
      }
    `
  )

  return (
    <section className="hero">
      <BackgroundImage
        className="hero-background"
        fluid={heroBackground.childImageSharp.fluid}
      >
        <div className="hero-overlay">
          <h5>hello, world.</h5>
          <h1>i'm stuart doney</h1>
          <p>front-end developer</p>
          <a>
            more about me <FontAwesomeIcon icon={faAngleDown} />
          </a>
        </div>
        <div className="social-links">
          <ul>
            <li>
              <a target="_blank" href="https://twitter.com/StuartDoney">
                <FontAwesomeIcon icon={faTwitter} size="2x" />
              </a>
            </li>
            <li>
              <a target="_blank" href="https://github.com/stupop010">
                <FontAwesomeIcon icon={faGithub} size="2x" />
              </a>
            </li>
            <li>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/stuart-doney-89569b164/"
              >
                <FontAwesomeIcon icon={faLinkedin} size="2x" />
              </a>
            </li>
          </ul>
        </div>
      </BackgroundImage>
    </section>
  )
}

export default Hero
