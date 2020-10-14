import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
//import styled from 'styled-components'

import BackgroundImage from 'gatsby-background-image'

    const query=graphql`
    {
      file(relativePath: {eq: "stethoscope.jpg"}) {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `
    const WoundLawBackground = ({children}) => {
        const {
        file: {
            childImageSharp:{fluid},
        }
    } = useStaticQuery(query);
    console.log(fluid)
    return (
        <BackgroundImage
          Tag="section"
          fluid={fluid}
          className="woundlaw-bkgrnd"
          backgroundColor={`#040e18`}
        >
          {children}
        </BackgroundImage>
    )}

export default WoundLawBackground