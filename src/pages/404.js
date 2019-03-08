import React from "react"

import Layout from "../components/layout"

const NotFoundPage = () => (
  <Layout headProps={{ title: "404: Not found" }}>
    <div className="container p-5 text-center">
      <p>404: nothin' here</p>
    </div>
  </Layout>
)

export default NotFoundPage
