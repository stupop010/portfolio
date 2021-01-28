const path = require(`path`)
// const readingTime = require("reading-time")
// import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer";
// const {
//   documentToPlainTextString,
// } = require("@contentful/rich-text-plain-text-renderer")
// import { renderRichText } from "gatsby-source-contentful/rich-text"
// require("dotenv").config()

// Log out information after a build is done
exports.onPostBuild = ({ reporter }) => {
  reporter.info(`Your Gatsby site has been built!`)
}

// Create blog pages dynamically
exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions
  const blogSingularTemplate = path.resolve(
    `src/templates/blog-singular-post.js`
  )
  const blogPostsTemplate = path.resolve(`src/templates/blog-posts.js`)

  const result = await graphql(`
    query {
      allContentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  result.data.allContentfulBlogPost.edges.forEach(({ node }) => {
    const { slug } = node

    createPage({
      path: `/blog/${slug.trim()}`,
      component: blogSingularTemplate,
      context: {
        slug,
      },
    })
  })

  const blogPagination = await graphql(`
    query {
      allContentfulBlogPost(filter: { featured: { eq: false } }) {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  const blogList = blogPagination.data.allContentfulBlogPost.edges
  const blogsPerPage = 5
  const numBlogPages = Math.ceil(blogList.length / blogsPerPage)
  Array.from({ length: numBlogPages }).forEach((_, i) => {
    createPage({
      path: i === 0 ? `/blogs` : `/blogs?page=${i + 1}`,
      component: blogPostsTemplate,
      context: {
        limit: blogsPerPage,
        skip: i * blogsPerPage,
        numBlogPages,
        currentPage: i + 1,
      },
    })
  })
}

// exports.onCreateNode = async ({ node, actions, getNode, loadNodeContent }) => {
//   const { createNodeField } = actions
//   const { internal } = node

//   const { owner, mediaType } = internal

//   if (owner !== "gatsby-source-contentful") {
//     return
//   }

//   const doc = JSON.parse(await loadNodeContent(node))

//   const text = documentToPlainTextString(doc)

//   // console.log(renderRichText(text), "hello")
//   // if (node.internal.type === `MarkdownRemark`) {
//   //   const value = createFilePath({ node, getNode })
//   //   createNodeField({
//   //     name: `slug`,
//   //     node,
//   //     value,
//   //   })
//   // }
// }
