import React from "react"
import styled from "styled-components"

const Footer = () => (
  <StyledFooter>
    <div className="container text-center">
      <span className="text-muted small">
        Made with <span style={{ color: "red" }}>❤</span> by{" "}
        <a href="https://github.com/brettinternet">@brettinternet</a>
      </span>
    </div>
  </StyledFooter>
)

export default Footer

const StyledFooter = styled.footer`
  width: 100%;
  height: 60px;
  /*  WHAT THE FUCK WHY CAN'T THIS MATCH THE HEIGHT? FUCKING SCROLL BAR OUT OF NO WHERE. FUCK */
  line-height: 59px;
`
