import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"

const ComponentName = ({data}) => {
  const {content} = data.service
  return <Layout>
    <section className="blog-template">
      <div className="section-center">
        <article className="blog-content">
          <ReactMarkdown source={content.content}/>
        </article>
        <Link to="/services" className="btn center-btn">
          services
        </Link>
      </div>
    </section>
  </Layout>
}

export const query = graphql`
query GetSingleService($slug: String) {
  service: contentfulService(slug: {eq: $slug}){
    content{
      content
    }
  }
}
`

export default ComponentName
