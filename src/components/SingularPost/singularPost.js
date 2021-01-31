import React from "react"
import { BLOCKS, MARKS } from "@contentful/rich-text-types"
import { renderRichText } from "gatsby-source-contentful/rich-text"

import CodeSnippet from "./codeSnippet"

import "./singularPost.scss"

const Bold = ({ children }) => <span className="bold">{children}</span>
const Text = ({ children }) => <p className="align-center">{children}</p>

const options = {
  renderMark: {
    [MARKS.BOLD]: text => <Bold>{text}</Bold>,
  },
  renderNode: {
    [BLOCKS.PARAGRAPH]: (node, children) => <Text>{children}</Text>,
    [BLOCKS.CODE]: (node, children) => <code>{children}</code>,
    [BLOCKS.EMBEDDED_ASSET]: node => {
      return (
        <>
          <h2>Embedded Asset</h2>
          <pre>
            <code>{JSON.stringify(node, null, 2)}</code>
          </pre>
        </>
      )
    },
    [BLOCKS.EMBEDDED_ENTRY]: node => {
      return <CodeSnippet code={node} />
    },
  },
}

const SingularPost = ({ post }) => {
  const { blogContent, blogTitle, author, date } = post
  console.log(post)

  return (
    <div className="blog-post-container">
      <section className="blog-post">
        <div>
          <h1>{blogTitle}</h1>
          <p>{date}</p>
          <p>Posted By: {author}</p>
        </div>
        <div>{blogContent && renderRichText(blogContent, options)}</div>
      </section>
    </div>
  )
}

export default SingularPost
