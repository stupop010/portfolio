import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import BackgroundImage from "gatsby-background-image"
import SocialLinks from "../social-links"

const Hero = () => {
  const { heroBackground } = useStaticQuery(
    graphql`
      query {
        heroBackground: file(relativePath: { eq: "hero-background-one.png" }) {
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
    <section id="home">
      <BackgroundImage
        className="hero-background"
        fluid={heroBackground.childImageSharp.fluid}
      >
        <div className="hero-overlay">
          <h5>hello, world.</h5>
          <h1>i'm stuart doney</h1>
          <p>Web designer &#38; developer</p>
          <Link to="#about">
            more about me <FontAwesomeIcon icon={faAngleDown} size="sm" />
          </Link>
        </div>
        <SocialLinks />
      </BackgroundImage>
    </section>
  )
}

export default Hero
