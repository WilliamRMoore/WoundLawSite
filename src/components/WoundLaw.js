import React from "react"
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"
// ...GatsbyImageSharpFluid
const query = graphql`
    {
      file(relativePath: {eq: "scales.png"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
const WoundLaw = () => {
  const {
    file: {
      childImageSharp:{fluid},
    }
  } = useStaticQuery(query);
  return <header className="woundLaw">
    <div className="section-center woundLaw-center">
      <article className="woundLaw-info">
        <div>
          <div className="underLine"></div>
          <h1>WoundLaw</h1>
          <h2>Over 70 Years Combined Medical Experience</h2>
          <Link to='/contact' className='btn'>
            Contact Us
          </Link>
        </div>
      </article>
      <Image fluid={fluid} className="woundLaw-img"/>
    </div>
  </header>
}

export default WoundLaw
