import React from "react"
import Layout from "../components/Layout"

const contact = () => {
  return <Layout>
    <section className="contact-page">
      <article className="contact-form">
        <h3>Contact Us</h3>
        <form action="https://formspree.io/f/xbjpyvjy" method="POST">
          <div className="form-group">
            <input required type="text" placeholder="name" name="name" className="form-control"/>
            <input required type="email" placeholder="email" name="email" className="form-control"/>
            <input required type="tel" placeholder="phone number" name="phone" className="form-control"/>
            <textarea
            required 
            name="message"
            rows="5" 
            placeholder="message" 
            className="form-control contact-text">
            </textarea>
          </div>
          <button type="submit" className="submit-btn btn">
            Submit
          </button>
        </form>
      </article>
    </section>
  </Layout>
}

export default contact
