/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"

import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author
          social {
            twitter
          }
        }
      }
    }
  `)

  const { author, social } = data.site.siteMetadata
  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(2.5),
        // backgroundColor: "#ffcece",
        borderRadius: "2%",
        padding: "2rem",
        background: "rgb(255,183,0)",
        background:
          "linear-gradient(90deg, rgba(255,183,0,1) 0%, rgba(255,206,206,0.950315160243785) 53%, rgba(38,212,192,1) 100%)",
      }}
    >
      <Image
        fixed={data.avatar.childImageSharp.fixed}
        alt={author}
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          minWidth: 50,
          borderRadius: `100%`,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
      />
      <p>
        Written by <strong>{author}</strong> who loves learning new things every
        day.
        {` `}
        <a
          style={{
            color: "#b85b5b",
          }}
          href={`https://twitter.com/${social.twitter}`}
        >
          Follow me on Twitter.
        </a>
      </p>
    </div>
  )
}

export default Bio
