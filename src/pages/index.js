import React from "react"
import { graphql } from 'gatsby' 
import Layout from "../components/layout"
import SEO from "../components/seo"

export default ({ data }) => {

  return (
    <Layout>
        <SEO title="Home" />
      {data.allMarkdownRemark.edges.map(({ node }) => (
        <div className="home marquee white" key="1">
          <h3>{node.frontmatter.title}</h3>
          <div dangerouslySetInnerHTML={{ __html: node.html }} />
        </div>
      ))}
    </Layout>
  )
}

export const query = graphql`
  query {
    site {
    siteMetadata {
      author
      description
      title
    }
  }
    allMarkdownRemark(
      filter: { frontmatter: { title: { regex: "/Welcome/" } } }
    ) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "DD MMMM, YYYY")
          }
          fields {
            slug
          }
          excerpt
          html
        }
      }
    }
  }
`
