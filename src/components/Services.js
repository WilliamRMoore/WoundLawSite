import React from "react"
import Title from "./Title"
import Service from "./Service"
// import { Link } from "gatsby"

export const Services = ({services,title,showLink}) => {
  return <section className="section">
    <Title title={title}/>
    <div className="section-center blogs-center">
      {services.map(service => {
        return <Service key={service.id} {...service} />
      })}
    </div>
    {/* {showLink && (
      <Link to="/services" className="btn center-btn">
        Services
      </Link>
    )} */}
  </section>
}
export default Services
