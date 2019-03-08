import React from "react"
import PropTypes from "prop-types"

import Head, { HeadProptypes } from "./Head"
import Header from "./Header"
import Footer from "./Footer"
import styled, { createGlobalStyle } from "styled-components"

import "bootstrap/dist/css/bootstrap.min.css"

const Layout = ({ children, location, headProps }) => (
  <StyledApp>
    <Head {...headProps} />
    <GlobalStyle />
    <Header location={location} />
    <Main>{children}</Main>
    <Footer />
  </StyledApp>
)

Layout.propTypes = {
  headProps: PropTypes.shape(HeadProptypes),
  location: PropTypes.object.isRequired,
}

export default Layout

/**
 * Fancy shit for sticky footer... -_-
 */
const StyledApp = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
`

const GlobalStyle = createGlobalStyle`
  html, body {
    height: 100%;
  }

  body {
    margin: 0;
    padding: 0;
  }
`

const Main = styled.main`
  flex-grow: 1;
`
