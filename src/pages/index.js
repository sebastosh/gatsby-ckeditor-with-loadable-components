import React from "react"
import { graphql } from 'gatsby' 
import Layout from "../components/layout"

export default ({ data }) => {
  return (
    <Layout>
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
