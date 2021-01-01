import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import WoundLaw from "../components/WoundLaw"
import WoundLawBackground from "../components/WoundLawBackground"
import Services from "../components/Services"
import SEO from "../components/SEO"

export default ({data}) => {
  const {
    allContentfulService: {nodes:services}
  } = data

  return <Layout>
    {/* <WoundLaw></WoundLaw> */}
    <SEO title="Home" description="Wound and Medical Law services. With over 70 years of combined medical experience, we provide an in-depth assessment of your medical case, rapid, timely, and thorough analyses of medical charts upon request, and prepare you to deploy your best evidence with maximal efficacy during the deposition or trial. We specialize in all forms of wound care, including outpatient care, and hyperbaric medicine."/>
    <WoundLawBackground>
      <WoundLaw/>
    </WoundLawBackground>
    <Services services={services} title="legal case services" showLink />
  </Layout>
}
// ...GatsbyImageSharpFluid
export const query = graphql`
{
    allContentfulService {
      nodes {
        id
        title
        slug
        content {
          content
        }
        description {
          description
        }
        image {
          fluid {
            ...GatsbyContentfulFluid
          }
        }
      }
    }
  }
`