import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import WoundLaw from "../components/WoundLaw"
import WoundLawBackground from "../components/WoundLawBackground"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
export default () => {
  return <Layout>
    {/* <WoundLaw></WoundLaw> */}
    <WoundLawBackground>
      <WoundLaw/>
    </WoundLawBackground>
  </Layout>
}
// ...GatsbyImageSharpFluid
