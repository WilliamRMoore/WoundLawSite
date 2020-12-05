import React from "react"
import Image from "gatsby-image"
//import { Link } from "gatsby"
const Service = ({id, title, image, slug, description}) => {
  // return <Link to={`/services/${slug}`} key={id} className="blog">
    return <article>
      <Image fluid={image.fluid} className="blog-img"/>
      <div className="blog-card">
        <h4>{title}</h4>
        <p>{description.description}</p>
      </div>
    </article>
  {/* </Link> */}
}


export default Service
