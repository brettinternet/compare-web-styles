import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"

import {
  Bootstrap,
  SemanticUi,
  Fabric,
  AntDesign,
  Stripe,
  Mapbox,
} from "sections/buttons"

const buttons = [
  {
    name: "Bootstrap",
    type: "CSS",
    license: "MIT",
    component: Bootstrap,
  },
  {
    name: "Semantic UI",
    type: "CSS, React",
    license: "MIT",
    component: SemanticUi,
  },
  {
    name: "Fabric",
    type: "CSS, React",
    license: "MIT/Private",
    component: Fabric,
  },
  {
    name: "Ant Design",
    type: "React",
    license: "MIT",
    component: AntDesign,
  },
  {
    name: "Stripe",
    type: "Private",
    license: "Private",
    component: Stripe,
  },
  {
    name: "Mapbox",
    type: "Private",
    license: "Private",
    component: Mapbox,
  },
]

const IndexPage = ({ location }) => (
  <Layout
    headProps={{
      title: "Home",
      keywords: ["styles", "application", "components", "library"],
    }}
    location={location}
  >
    <div className="container mt-4">
      <h1>Buttons</h1>
      <table className="table table-borderless table-hover">
        <thead style={{ borderBottom: "1px solid #6c757d" }}>
          <tr>
            <th scope="col">Source</th>
            <th scope="col">Type</th>
            <th scope="col">License</th>
            <th scope="col" className="text-center">
              Button
            </th>
          </tr>
        </thead>
        <tbody>
          {buttons.map(
            ({ name, type, license, component: Component }, index) => (
              <tr key={index}>
                <TH scope="row">{name}</TH>
                <TD className="text-muted">{type}</TD>
                <TD className="text-muted">{license}</TD>
                <TD className="text-center">
                  <Component />
                </TD>
              </tr>
            )
          )}
        </tbody>
      </table>
    </div>
  </Layout>
)

const TH = styled.th`
  && {
    vertical-align: middle;
  }
`

const TD = styled.td`
  && {
    vertical-align: middle;
  }
`

export default IndexPage
