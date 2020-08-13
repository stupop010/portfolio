import React from "react"

import Layout from "../components/layout"
import Hero from "../components/hero"
import SEO from "../components/seo"
import Header from "../components/header/header"
import About from "../components/about"
import Projects from "../components/projects"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Header />
    <About />
    <Projects />
  </Layout>
)

export default IndexPage
