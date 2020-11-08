import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import WoundLaw from "../components/WoundLaw"
import WoundLawBackground from "../components/WoundLawBackground"
import Services from "../components/Services"
// import Blogs from "../components/Services"
import SEO from "../components/SEO"

export default ({data}) => {
  console.log(data);
  const {
    allContentfulService: {nodes:services}
  } = data

  return <Layout>
    {/* <WoundLaw></WoundLaw> */}
    <SEO title="Home" description="this is our home page"/>
    <WoundLawBackground>
      <WoundLaw/>
    </WoundLawBackground>
    <Services services={services} title="services" showLink />
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