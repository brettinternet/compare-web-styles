import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"
import styled from "styled-components"
import cs from "classnames"

import Logo from "components/Logo"
import routes from "utils/routes"
import GithubSvg from "images/github.svg"

const Header = ({ location }) => {
  return (
    <header>
      <nav className="navbar navbar-expand navbar-light container">
        <Link className="navbar-brand" to="/">
          <Logo className="d-inline-block align-top mr-3" />
          Compare Web Styles
        </Link>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            {routes.map(({ name, href }, index) => {
              const isActive = location && location.pathname === href
              return (
                <li
                  key={index}
                  className={cs("nav-item", isActive && "active")}
                >
                  <Link className="nav-link" to={href}>
                    {name}{" "}
                    {isActive && <span className="sr-only">(current)</span>}
                  </Link>
                </li>
              )
            })}
            <Li className="nav-item">
              <A
                href="https://github.com/brettinternet/compare-web-styles"
                className="nav-link"
                target="_blank"
                rel="noopener noreferrer"
              >
                <GithubSvg />
              </A>
            </Li>
          </ul>
        </div>
      </nav>
    </header>
  )
}

Header.propTypes = {
  location: PropTypes.object.isRequired,
}

export default Header

const Li = styled.li`
  width: 40px;
`

const A = styled.a`
  text-decoration: none;
  fill: #4f4f4f;
  transition: fill 200ms;

  &:hover {
    text-decoration: none;
    fill: #000;
  }
`
