import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Blogs = ({ blogs }) => {
  return (
    <div className="blogs row">
      {blogs.map(({ node }) => {
        return (
          <div className="blog-card col-md-3 col-sm-6 col-xs-12">
            <Img fixed={node.image.fixed} />
            <h3>
              {/* <Link to={`/blog/${node.slug}`}>{node.blogTitle}</Link> */}
              How to add default image to ACF image field
            </h3>
            <p>
              Posted By: <b>{node.author}</b>
            </p>
            <p>exterp</p>
            <p>{node.date}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Blogs
