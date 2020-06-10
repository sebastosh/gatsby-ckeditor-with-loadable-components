import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"


export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
       <SEO title={post.frontmatter.title} description={post.excerpt} />
         <div className="pages white" >
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
      {post.frontmatter.title === "Get in touch:" ?
        <div className="social">
        <a href="https://www.facebook.com/WileyTeleprompting/" title="Wiley Teleprompting on Facebook" target="_blank" rel="noopener noreferrer">
          <img
            src="/facebook-icon.png"
           
            className="footer-img"
            alt="Facebook"
          /> Facebook
        </a>
        <a href="https://www.instagram.com/wileyteleprompting/" title="Wiley Teleprompting on Instagram" target="_blank" rel="noopener noreferrer">
          <img
            src="/instagram-icon.png"
            alt="Instagram"
          /> Instagram 
        </a>
      </div> : null
      }

     
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
      excerpt
    }
  }
`