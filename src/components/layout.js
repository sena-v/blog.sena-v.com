/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.com/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import "prismjs/themes/prism-tomorrow.css"
import "./layout.css"
import Header from "./header"
import Footer from "./footer"
import Float from "./float"
import FloatMenu from "./float-menu"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          display: `grid`,
          // margin: `0 100px`,
          gridTemplateColumns: `70px 70px 1100px 1fr`,
        }}
      >
        <div
          style={{
            gridColumn: 1 / 2,
            backgroundColor: `#2F2D32`,
          }}
        />
        <Float style={{ gridColumn: 2 / 3 }} />
        <div
          style={{
            maxWidth: 1200,
            paddingTop: `2rem `,
            paddingBottom: `120px`,
            paddingRight: `2rem`,
            paddingLeft: `3rem`,

            gridColumn: 2 / 3,
            backgroundColor: `#2F2D32`,
          }}
        >
          <main>{children}</main>
        </div>
        <FloatMenu style={{ gridColumn: 3 / 4 }} />
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
