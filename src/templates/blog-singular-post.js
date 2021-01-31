import React from "react"
import { graphql } from "gatsby"

import Header from "../components/header"
import Layout from "../components/layout"
import SEO from "../components/seo"
import SingularPost from "../components/SingularPost"

const BlogPosts = ({ data }) => {
  const { contentfulBlogPost } = data

  return (
    <Layout>
      <SEO title={contentfulBlogPost.blogTitle} />
      <Header />
      <SingularPost post={contentfulBlogPost} />
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    contentfulBlogPost(slug: { eq: $slug }) {
      blogContent {
        raw
      }
      date(formatString: "MMMM DD YYYY")
      author
      blogTitle
      image {
        fluid(quality: 100) {
          ...GatsbyContentfulFluid
        }
      }
    }
  }
`

export default BlogPosts
