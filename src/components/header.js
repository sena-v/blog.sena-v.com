import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#0D47A1`,
      paddingBottom: `1rem`,
    }}
  >
    <div
      style={{
        //margin: `0 auto`,
        //maxWidth: 1000,
        display: `inline-block`,
        height: `100px`,
        width: `100%`,

        //padding: `0.5rem`,
      }}
    >
      <div
        style={{
          //background: `#fff800`,
          textDecoration: `none`,
          height: `10px`,
        }}
      />
      <p
        style={{
          margin: 0,
          fontSize: `60px`,
          textAlign: `center`,

          padding: `2rem`,
        }}
      >
        <Link
          to="/"
          style={{
            color: `#2196F3`,
            textDecoration: `none`,
          }}
        >
          <b>{siteTitle}</b>
        </Link>
      </p>
      <div
        style={{
          background: `#fff800`,
          height: `10px`,
        }}
      />
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: `sena-v.com`,
}

export default Header
