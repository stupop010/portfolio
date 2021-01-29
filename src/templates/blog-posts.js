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
      <Header />
      <BlogHero />
      <BlogPage
        featuredBlogPost={featuredBlogPost.edges}
        paginationBlogPosts={paginationBlogPosts}
        paginationData={pageContext}
      />
      {/* <BlogPagination
        blogs={blogs}
        numBlogPages={numBlogPages}
        currentPage={currentPage}
      /> */}
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
            fixed(width: 620, height: 330) {
              ...GatsbyContentfulFixed
            }
          }
          blogContent {
            raw
          }
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
            fixed(width: 285, height: 190) {
              ...GatsbyContentfulFixed
            }
          }
          excerpt
        }
      }
    }
  }
`

export default blogPostsTemplate
