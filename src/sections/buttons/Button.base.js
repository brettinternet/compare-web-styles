import React from "react"

export default ({ children, ...rest }) => (
  <a target="_blank" rel="noopener noreferrer" {...rest}>
    {children}
  </a>
)
