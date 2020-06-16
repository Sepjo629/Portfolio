import React from "react"

import Layout from "../components/layout"
import Home from "../sections/Home"
import About from "../sections/About"
import Work from "../sections/Work"
import Contact from "../sections/Contact"

const IndexPage = () => (
  <Layout>
    <Home />
    <About />
    <Work />
    <Contact />
  </Layout>
)

export default IndexPage
