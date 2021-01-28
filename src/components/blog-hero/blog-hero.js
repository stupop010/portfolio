import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import BackgroundImage from "gatsby-background-image"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import SocialLinks from "../social-links"

import "./blog-hero.scss"

const BlogHero = () => {
  const { blogHeroBackground } = useStaticQuery(
    graphql`
      query {
        blogHeroBackground: file(relativePath: { eq: "blog-background.png" }) {
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
    <section id="blog-hero">
      <BackgroundImage
        className="blog-hero-background"
        fluid={blogHeroBackground.childImageSharp.fluid}
      >
        <div className="blog-hero-content">
          <h1>Blog</h1>
        </div>
        <SocialLinks />
      </BackgroundImage>
    </section>
  )
}

export default BlogHero