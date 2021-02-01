import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Header from "../components/header"
import BlogHero from "../components/blog-hero"
import BlogPage from "../components/blog-page"

const blogPostsTemplate = ({ data, pageContext }) => {
  const { featuredBlogPost, paginationBlogPosts } = data
  return (
    <Layout>
      <SEO title="Blog" />
      <Header height={50} />
      <BlogHero />
      <BlogPage
        featuredBlogPost={featuredBlogPost.edges}
        paginationBlogPosts={paginationBlogPosts}
        paginationData={pageContext}
      />
    </Layout>
  )
}

export const BlogListQuery = graphql`
  query blogPaginationQuery($skip: Int!, $limit: Int!) {
    featuredBlogPost: allContentfulBlogPost(
      filter: { featured: { eq: true } }
      limit: 1
      sort: { order: DESC, fields: date }
    ) {
      edges {
        node {
          slug
          date(formatString: "DD MMMM YYYY")
          author
          blogTitle
          image {
            fluid(maxWidth: 620, maxHeight: 330) {
              ...GatsbyContentfulFluid
            }
          }
          blogContent {
            raw
          }
          id
        }
      }
    }

    paginationBlogPosts: allContentfulBlogPost(
      filter: { featured: { eq: false } }
      limit: $limit
      skip: $skip
    ) {
      edges {
        node {
          slug
          date(formatString: "DD MMMM YYYY")
          author
          blogTitle
          image {
            fluid(maxWidth: 285, maxHeight: 190) {
              ...GatsbyContentfulFluid
            }
          }
          excerpt
          id
        }
      }
    }
  }
`

export default blogPostsTemplate
