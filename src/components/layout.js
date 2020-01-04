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
          lineHeight: "1.5",
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
            paddingTop: "1rem",
            color: "#b85b5b",
          }}
        >
          <div
            style={{
              padding: "2rem",
              marginBottom: "1rem",
              background: "rgb(255,183,0)",
              background:
                "linear-gradient(90deg, rgba(255,183,0,1) 0%, rgba(255,206,206,0.950315160243785) 53%, rgba(38,212,192,1) 100%)",
              lineHeight: "4",
              // height: "10rem",
            }}
          >
            <span>See also: </span>
            ❤️
            <a
              style={{
                color: "red",
                margin: "1rem",
                borderRadius: "20%",
                backgroundColor: "white",
                padding: "0.5rem",
                border: "solid 1px red",
                borderRadius: "20%",
                backgroundColor: "white",
                padding: "0.5rem",
                border: "solid 1px red",
              }}
              href={`https://lauraisdrawing.netlify.com/`}
            >
              Laura is drawing
            </a>
            ❤️
            <a
              style={{
                color: "red",
                margin: "1rem",
                borderRadius: "20%",
                backgroundColor: "white",
                padding: "0.5rem",
                border: "solid 1px red",
              }}
              href={`https://blogideas.netlify.com/`}
            >
              Blogideas
            </a>
            ❤️
            <a
              style={{
                color: "red",
                margin: "1rem",
                borderRadius: "20%",
                backgroundColor: "white",
                padding: "0.5rem",
                border: "solid 1px red",
                textDecoration: "none",
              }}
              href={`https://homeschooling.netlify.com/`}
            >
              Homeschooling
            </a>
            ❤️
            <a
              style={{
                color: "red",
                margin: "1rem",
                borderRadius: "20%",
                backgroundColor: "white",
                padding: "0.5rem",
                border: "solid 1px red",
                textDecoration: "none",
              }}
              href={`https://stayathomemom.netlify.com/`}
            >
              Stay at home mom
            </a>
            ❤️
            <a
              style={{
                color: "red",
                margin: "1rem",
                borderRadius: "20%",
                backgroundColor: "white",
                padding: "0.5rem",
                border: "solid 1px red",
                textDecoration: "none",
              }}
              href={`https://codingforeveryone.netlify.com/`}
            >
              Coding for everyone
            </a>
            ❤️
            <a
              style={{
                color: "red",
                margin: "1rem",
                borderRadius: "20%",
                backgroundColor: "white",
                padding: "0.5rem",
                border: "solid 1px red",
                textDecoration: "none",
              }}
              href={`https://Attractive.netlify.com/`}
            >
              Attractive
            </a>
            ❤️
            <a
              style={{
                color: "red",
                margin: "1rem",
                borderRadius: "20%",
                backgroundColor: "white",
                padding: "0.5rem",
                border: "solid 1px red",
                textDecoration: "none",
              }}
              href={`https://howtostayhealthy.netlify.com/`}
            >
              How to stay healthy
            </a>
            ❤️
            <a
              style={{
                color: "red",
                margin: "1rem",
                borderRadius: "20%",
                backgroundColor: "white",
                padding: "0.5rem",
                border: "solid 1px red",
                textDecoration: "none",
              }}
              href={`https://whattolearn.netlify.com/`}
            >
              What to learn
            </a>
            ❤️
            <a
              style={{
                color: "red",
                margin: "1rem",
                borderRadius: "20%",
                backgroundColor: "white",
                padding: "0.5rem",
                border: "solid 1px red",
                textDecoration: "none",
              }}
              href={`https://englishcheatsheets.netlify.com/`}
            >
              Cheatsheets
            </a>
            ❤️
            <a
              style={{
                color: "red",
                margin: "1rem",
                borderRadius: "20%",
                backgroundColor: "white",
                padding: "0.5rem",
                border: "solid 1px red",
                textDecoration: "none",
              }}
              href={`https://workfromhomejobs.netlify.com/`}
            >
              Work from home
            </a>
            ❤️
            <a
              style={{
                color: "red",
                margin: "1rem",
                borderRadius: "20%",
                backgroundColor: "white",
                padding: "0.5rem",
                border: "solid 1px red",
                textDecoration: "none",
              }}
              href={`https://futurecreativejobs.netlify.com/`}
            >
              Future creative jobs
            </a>
            ❤️
            <a
              style={{
                color: "red",
                margin: "1rem",
                borderRadius: "20%",
                backgroundColor: "white",
                padding: "0.5rem",
                border: "solid 1px red",
                textDecoration: "none",
              }}
              href={`https://newtrends.netlify.com/`}
            >
              New trends
            </a>
            ❤️
          </div>
          <strong>Blogging tips </strong>© {new Date().getFullYear()}, Built by
          <a
            style={{
              color: "red",
              margin: "0.5rem",
            }}
            href="https://elaidina.netlify.com"
          >
            elaidina
          </a>
          with
          {` `}
          <a
            style={{
              color: "#b85b5b",
            }}
            href="https://www.gatsbyjs.org"
          >
            Gatsby.js
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
