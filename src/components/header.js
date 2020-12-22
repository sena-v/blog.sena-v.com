import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: `#CE4532`,
      // marginBottom: `1.4rem`,
    }}
  >
      <div
        style={{
          //margin: `0 auto`,
          maxWidth: 1000,
          padding: `0.5rem`,
          display: `inline-block`,
          marginLeft: `200px`,
        }}
      >
        <p
          style={{
            margin: 0,
            fontSize: `25px`,
          }}
        >
          <Link
            to="/"
            style={{
              color: `white`,
              textDecoration: `none`,
            }}
          >
            <b>{siteTitle}</b>
          </Link>
        </p>
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
