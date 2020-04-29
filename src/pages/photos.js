import React from "react"
import { graphql } from 'gatsby' 
import Layout from "../components/layout"

const gramURL = 'https://www.instagram.com/p/'

export default ({ data }) => {

  console.log("data.allInstaNode.edges", data.allInstaNode.edges)

  return (
    <Layout>
<div className="pages white"><h1>PHOTOS</h1>

<div className="photos" >
{data.allInstaNode.edges.map(({ node }) => (

<div className="photo"  key={node.id}>
  <a href={gramURL+node.id} target="_blank" rel="noopener noreferrer">
    <img src={node.thumbnails[2].src} alt="Wiley Teleprompting Instagram Photos" />
  </a>

</div>
   ))}
</div>


</div>


    </Layout>
  )
}

export const query = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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

  allInstaNode {
    edges {
      node {
        id
        thumbnails {
          config_height
          config_width
          src
        }
      }
    }
  }
}

`;