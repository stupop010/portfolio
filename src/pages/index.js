import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import Hero from "../components/hero"
import SEO from "../components/seo"
import Header from "../components/header/header"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Hero />
    <Header />
  </Layout>
)

export default IndexPage
