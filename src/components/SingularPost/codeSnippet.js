import React, { useEffect } from "react"
import MarkdownIt from "markdown-it"
import Prism from "prismjs"

const md = new MarkdownIt({
  html: true,
  linkify: false,
})

const CodeSnippet = ({ code }) => {
  // console.log(props)
  useEffect(() => {
    Prism.highlightAll()
  })

  return (
    <div
      dangerouslySetInnerHTML={{ __html: md.render(JSON.stringify(code)) }}
    />
  )
}

export default CodeSnippet
