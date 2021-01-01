import React from "react"
import Image from "gatsby-image"
const Service = ({id, title, image, slug, description}) => {
    return <article>
      <Image fluid={image.fluid} alt={title} className="blog-img"/>
      <div className="blog-card">
        <h4>{title}</h4>
        <p>{description.description}</p>
      </div>
    </article>
}


export default Service
