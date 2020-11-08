// import React from "react"
// import Layout from "../components/Layout"
// import { graphql } from "gatsby"
// import Title from "../components/Title"
// import Image from "gatsby-image"
// // ...GatsbyImageSharpFluid
// const About = () => {
//   return <h2>about page</h2>
// }

// export default About
import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Image from "gatsby-image"
import Title from "../components/Title"
import LiLink from "../components/LiLink"

const ComponentName = ({ data }) => {
  const {allContentfulDocBio:{nodes:bios}} = data
  console.log(bios);
  return <Layout>
    <section  className="about-page">
      <Title title="Meet The Doctors"/>
    <section className="about-page about">
      {bios.map((bio)=>{
        return <article key={bio.id}>
          <Image fluid={bio.headshot.fluid} alt={bio.name}></Image>
      <h3>{bio.name}</h3>
      <p className="about-text">{bio.bio.bio}</p>
      <div><LiLink linkedin={bio.linkedin}/></div>
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
