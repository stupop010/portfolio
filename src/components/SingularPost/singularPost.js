import React from "react"
import Img from "gatsby-image"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"
import { documentToPlainTextString } from "@contentful/rich-text-plain-text-renderer"
import readingTime from "reading-time"

import CodeSnippet from "./codeSnippet"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p>{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.CODE]: (node, children) => <code>{children}</code>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      if (!node.data.target.fluid) return
      return (
        <>
          <Img fluid={node.data.target.fluid} />
        </>
      )
    },
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      return <CodeSnippet code={node} />
    },
  },
}

const SingularPost = ({ post }) => {
  const { blogContent, blogTitle, author, date, image } = post

  const text = documentToPlainTextString(JSON.parse(blogContent.raw))
  const readTime = readingTime(text)

  return (
    <div className="blog-post-container">
      <section className="blog-post">
        <h1>{blogTitle}</h1>
        <p>{readTime.text}</p>
        <Img fluid={image.fluid} className="blog-img" />
        <div>{blogContent && renderRichText(blogContent, options)}</div>
        <div className="blog-meta">
          <p>{date}</p>
          <p>Posted By: {author}</p>
        </div>
      </section>
    </div>
  )
}

export default SingularPost
