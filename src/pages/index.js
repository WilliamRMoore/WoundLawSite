import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import WoundLaw from "../components/WoundLaw"
import WoundLawBackground from "../components/WoundLawBackground"
import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
import Blogs from "../components/Blogs"
import services from "../constants/services"
import Bios from "../components/Bios"
export default () => {
  return <Layout>
    {/* <WoundLaw></WoundLaw> */}
    <WoundLawBackground>
      <WoundLaw/>
    </WoundLawBackground>
    <Services/>
  </Layout>
}
// ...GatsbyImageSharpFluid
