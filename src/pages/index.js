import React from "react"
import Layout from "../components/layout"
import styled from "styled-components"
import beautify from "cssbeautify"

import {
  BootstrapButton,
  BootstrapStyles,
  SemanticUiButton,
  SemanticUiStyles,
  FabricButton,
  FabricStyles,
  AntDesignButton,
  AntDesignStyles,
  StripeButton,
  StripeStyles,
  MapboxButton,
  MapboxStyles,
} from "sections/buttons"

const buttons = [
  {
    name: "Bootstrap",
    type: "CSS",
    license: "MIT",
    component: BootstrapButton,
    styles: BootstrapStyles,
  },
  {
    name: "Semantic UI",
    type: "CSS, React",
    license: "MIT",
    component: SemanticUiButton,
    styles: SemanticUiStyles,
  },
  {
    name: "Fabric",
    type: "CSS, React",
    license: "MIT/Private",
    component: FabricButton,
    styles: FabricStyles,
  },
  {
    name: "Ant Design",
    type: "React",
    license: "MIT",
    component: AntDesignButton,
    styles: AntDesignStyles,
  },
  {
    name: "Stripe",
    type: "Private",
    license: "Private",
    component: StripeButton,
    styles: StripeStyles,
  },
  {
    name: "Mapbox",
    type: "Private",
    license: "Private",
    component: MapboxButton,
    styles: MapboxStyles,
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
      <table className="table table-responsive-sm">
        <thead>
          <tr>
            <th scope="col">Source</th>
            <th scope="col">Type</th>
            <th scope="col">License</th>
            <th scope="col" className="text-center">
              Button
            </th>
            <th scope="col">Styles</th>
          </tr>
        </thead>
        <tbody>
          {buttons.map(
            ({ name, type, license, component: Component, styles }, index) => {
              const styleString =
                styles &&
                beautify(styles[0].replace(/&/g, "button"), {
                  indent: "  ",
                  autosemicolon: true,
                })
              return (
                <tr key={index}>
                  <TH scope="row">{name}</TH>
                  <TD className="text-muted">{type}</TD>
                  <TD className="text-muted">{license}</TD>
                  <TD className="text-center">
                    <Component />
                  </TD>
                  <TD>
                    <Pre>
                      <code>{styleString}</code>
                    </Pre>
                  </TD>
                </tr>
              )
            }
          )}
        </tbody>
      </table>
    </div>
  </Layout>
)

const Pre = styled.pre`
  word-wrap: break-word;
  white-space: pre-wrap;
`

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