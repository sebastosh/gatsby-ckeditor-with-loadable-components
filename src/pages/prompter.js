import React from "react"
import Loadable from "@loadable/component"
import Layout from "../components/layout"
import SEO from "../components/seo"

const LoadableEditor = Loadable(() => import("../components/LoadableEditor"))

export default () => (
  <div>
    <Layout>

<SEO title="Web Prompter" description="Web Browser Teleprompter" />
      <LoadableEditor />
    </Layout>
  </div>
)
