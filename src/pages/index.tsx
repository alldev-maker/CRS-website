import * as React from "react"
import HeroSlice from "../components/home/hero-slice"
import Layout from "../components/layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <HeroSlice />
  </Layout>
)

export default IndexPage
