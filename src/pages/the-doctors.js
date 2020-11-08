
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import Title from "../components/Title"
import LiLink from "../components/LiLink"
import SEO from "../components/SEO"

const ComponentName = ({ data }) => {
  const {allContentfulDocBio:{nodes:bios}} = data
  console.log(bios);
  return <Layout>
    <SEO title="About" description="Woundlaw Doctors Profile"/>
    <section  className="about-page">
      <Title title="Meet The Doctors"/>
    <section className="about-page about">
      {bios.map((bio)=>{
        return <article key={bio.id}>
          <Image fluid={bio.headshot.fluid} alt={bio.name}></Image>
      <h3>{bio.name}</h3>
      <p className="about-text">{bio.bio.bio}</p>
      <div className="btn"><LiLink linkedin={bio.linkedin}/>LinkedIn</div>
        </article>
      })}
    </section>
    </section>
  </Layout>
}

export const query = graphql`
  {
    allContentfulDocBio {
      nodes {
        id
        name
        slug
        email
        linkedin
        headshot {
          fluid{
            ...GatsbyContentfulFluid
          }
        }
        bio {
          bio
        }
      }
    }
  }
`

export default ComponentName
