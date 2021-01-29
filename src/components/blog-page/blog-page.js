import React from "react"

import Pagination from "../pagination"
import Featured from "./featured"
import Blogs from "./blogs"
import "./blog-page.scss"

const BlogPage = ({
  featuredBlogPost,
  paginationBlogPosts,
  paginationData,
}) => {
  const featured = featuredBlogPost[0].node

  return (
    <div className="blog-page-container">
      <Featured featured={featured} />
      <Blogs blogs={paginationBlogPosts.edges} />
      <div>
        <Pagination paginationData={paginationData} />
      </div>
    </div>
  )
}

export default BlogPage
