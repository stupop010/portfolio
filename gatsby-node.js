const path = require(`path`)

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
      path: i === 0 ? `/blogs` : `/blogs/${i + 1}`,
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
