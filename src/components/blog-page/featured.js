import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import readingTime from "reading-time"

import "./blog-page.scss"

const Featured = ({ featured }) => {
  const text = documentToPlainTextString(JSON.parse(featured.blogContent.raw))
  const readTime = readingTime(text)
  const featuredSplit = featured.excerpt || text.substr(1, 400)
  return (
    <div className="featured-blog">
      <div className="featured-img">
        <Img fixed={featured.image.fixed} />
      </div>
      <div className="featured-content">
        <div>
          <h2>{featured.blogTitle}</h2>
          <p>
            {featuredSplit}... <Link to={"/blog/test-test"}>Read more</Link>
          </p>
        </div>
        <div className="featured-details">
          <p>{featured.date}</p>
          <p className="featured-author">
            Posted By: <b>{featured.author}</b>
          </p>
        </div>
      </div>
    </div>
  )
}

export default Featured
