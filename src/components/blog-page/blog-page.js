import React from "react"

import Pagination from "../pagination"
import Featured from "./featured"
import Blogs from "./blogs"

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
      {paginationData.numBlogPages > 1 && (
        <div>
          <Pagination paginationData={paginationData} />
        </div>
      )}
    </div>
  )
}

export default BlogPage
