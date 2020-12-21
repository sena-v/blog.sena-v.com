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
      <div style={{
        display: `grid`,
        margin: `0 100px`,
        gridTemplateColumns: `150px 1fr`,
      }}>
        <Float style={{
          gridColumn: 1/2, }}/>
        <div
          style={{
            //margin: `0 100px`,
            maxWidth: 960,
            padding: `0 1.0875rem 1.45rem`,
            paddingBottom: `120px`,
            gridColumn: 2/3,
          }}
        >
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
