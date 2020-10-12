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
      // Set ImageData.
    //   const imageData = data.desktop.childImageSharp.fluid
    //   console.log(imageData)
    //   return (
    //     <BackgroundImage
    //       Tag="section"
    //       className={className}
    //       fluid={imageData}
    //       backgroundColor={`#040e18`}
    //     >
    //     </BackgroundImage>
    //   )


// const WoundLawBackground = styled(BackgroundSection)`
//   width: 100vw;
//   height: 50vw;
//   background-position: center;
//   margin-top:100px;
//   background-repeat: repeat-y;
//   background-size: cover;
// `

export default WoundLawBackground