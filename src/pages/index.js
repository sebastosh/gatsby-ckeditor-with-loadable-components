import React from "react"
import Loadable from "@loadable/component"

const LoadableEditor = Loadable(() => import("../components/LoadableEditor"))
export default () => (
  <div>
    {" "}
    <h2>Using CKEditor 5 build in Gatsby</h2>
    <LoadableEditor />
  </div>
)
