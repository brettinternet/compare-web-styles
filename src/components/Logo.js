import React from "react"

import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Logo = ({ className }) => (
  <StaticQuery
    query={graphql`
      query {
        logo: file(relativePath: { eq: "logo.png" }) {
          childImageSharp {
            fixed(width: 30, height: 30) {
              ...GatsbyImageSharpFixed
            }
          }
        }
      }
    `}
    render={data => {
      return (
        <Img
          fixed={data.logo.childImageSharp.fixed}
          className={className}
          alt="site logo"
        />
      )
    }}
  />
)

export default Logo
