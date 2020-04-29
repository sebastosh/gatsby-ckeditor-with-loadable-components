import React from "react"
import Loadable from "@loadable/component"
import Layout from "../components/layout"

const LoadableEditor = Loadable(() => import("../components/LoadableEditor"))

export default () => (
  <div>
    <Layout>
      <LoadableEditor />
    </Layout>
  </div>
)
