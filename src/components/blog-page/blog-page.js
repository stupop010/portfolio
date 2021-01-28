import React from "react"

import Featured from "./featured"
import Blogs from "./blogs"
import "./blog-page.scss"

const BlogPage = ({ featuredBlogPost, paginationBlogPosts }) => {
  const featured = featuredBlogPost[0].node

  return (
    <div className="blog-page-container">
      <Featured featured={featured} />
      <Blogs blogs={paginationBlogPosts.edges} />
      <div className="pagination"></div>
    </div>
  )
}

export default BlogPage
