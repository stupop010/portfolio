import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Hero from "../components/hero"
import SEO from "../components/seo"
import Header from "../components/header/header"
import About from "../components/about"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Header />
    <About />
  </Layout>
)

export default IndexPage
