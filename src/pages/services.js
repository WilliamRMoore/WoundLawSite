import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Services from "../components/Services"
// import Blogs from "../components/Blogs"
// ...GatsbyImageSharpFluid
//...GatsbyContentfulFluid

const services = ({data:{
  allContentfulService: {nodes: services},
  },
}) => {
  return <Layout>
    <section className="blog-page">
      <Services services={services} title="consulting services"/>
    </section>
  </Layout>
}

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
export default services
