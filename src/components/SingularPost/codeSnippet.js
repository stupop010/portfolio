import React, { useEffect } from "react"
import MarkdownIt from "markdown-it"
import Prism from "prismjs"

const md = new MarkdownIt({
  html: true,
  linkify: false,
})

const CodeSnippet = ({ code }) => {
  useEffect(() => {
    Prism.highlightAll()
  })

  // If the contentful id === "2aDEqocqPUeOfzqJItCvE6"
  // Its is a dummy embedded content
  const Render = () => {
    if (code.data.target.contentful_id !== "2aDEqocqPUeOfzqJItCvE6") {
      return (
        <div
          dangerouslySetInnerHTML={{
            __html: md.render(code.data.target.markdownText.markdownText),
          }}
        />
      )
    }

    return null
  }

  return <Render />
}

export default CodeSnippet
