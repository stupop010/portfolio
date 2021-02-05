import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BackgroundImage from "gatsby-background-image"

import SocialLinks from "../social-links"

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
