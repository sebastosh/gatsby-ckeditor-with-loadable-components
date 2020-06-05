import React from "react"
import { graphql } from 'gatsby' 
import Layout from "../components/layout"
import SEO from "../components/seo"
import { RichText } from 'prismic-reactjs';

export default ({ data }) => {
console.log("data", data)

  return (
    <Layout>
        <SEO title="Home" />
        <div className="pages white" >  {RichText.render(data.prismic.services.services_title)}
  {RichText.render(data.prismic.services.services_content)}
</div>
    </Layout>
  )
}

export const query = graphql`
 query MyQuery {
  prismic {
    services(lang: "en-us", uid: "services") {
      services_title
      services_content
      _linkType
    }
  }
}
`
