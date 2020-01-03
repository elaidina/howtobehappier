import React from "react"
import { Link } from "gatsby"

import { rhythm, scale } from "../utils/typography"
import CookieConsent from "react-cookie-consent"

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let header

    if (location.pathname === rootPath) {
      header = (
        <h1
          style={{
            ...scale(1.5),
            marginBottom: rhythm(1.5),
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#b85b5b`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h1>
      )
    } else {
      header = (
        <h3
          style={{
            fontFamily: `Montserrat, sans-serif`,
            marginTop: 0,
          }}
        >
          <Link
            style={{
              boxShadow: `none`,
              textDecoration: `none`,
              color: `#b85b5b`,
            }}
            to={`/`}
          >
            {title}
          </Link>
        </h3>
      )
    }
    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(35),
          padding: `${rhythm(2)} ${rhythm(3 / 4)}`,
          // background: "rgb(131,58,180)";
          backgroundColor: "#dbdbdb",
        }}
      >
        <header>{header}</header>
        <hr
          style={{
            height: "1rem",
          }}
        />
        <main>{children}</main>
        <footer
          style={{
            color: "#b85b5b",
          }}
        >
          © {new Date().getFullYear()}, Built with
          {` `}
          <a
            style={{
              color: "#b85b5b",
            }}
            href="https://www.gatsbyjs.org"
          >
            Gatsby
          </a>
        </footer>
        <CookieConsent>
          This website uses cookies to enhance the user experience.
        </CookieConsent>
      </div>
    )
  }
}

export default Layout
