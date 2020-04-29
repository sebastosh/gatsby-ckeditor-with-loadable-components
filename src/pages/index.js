import React from "react"
import Loadable from "@loadable/component"
import Layout from "../components/layout"

const LoadableEditor = Loadable(() => import("../components/LoadableEditor"))
export default () => (
  <div>
<Layout>    {" "}
    <h2>Using CKEditor 5 build in Gatsby</h2>
    <LoadableEditor /></Layout>
  </div>
)


