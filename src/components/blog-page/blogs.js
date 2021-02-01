import React from "react"
import Img from "gatsby-image"
import { Link } from "gatsby"

const Blogs = ({ blogs }) => {
  return (
    <div className="blogs">
      {blogs.map(({ node }) => {
        return (
          <div className="blog-card" key={node.id}>
            <Img fluid={node.image.fluid} />
            <h3>
              <Link to={`/blog/${node.slug}`}>{node.blogTitle}</Link>
            </h3>
            <p className="blog-author">
              Posted By: <strong>{node.author}</strong>
            </p>
            <p className="blog-excerpt">{node.excerpt}</p>
            <Link to={`/blog/${node.slug}`} className="read-more">
              Read More
            </Link>
            <p className="blog-date">{node.date}</p>
          </div>
        )
      })}
    </div>
  )
}

export default Blogs
