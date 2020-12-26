import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import back from '../images/titleback.png'

const Header = ({ siteTitle }) => (
  <header
    style={{
      // background: `#0D47A1`,
      // paddingBottom: `1rem`,
    }}
  >
    <div
      style={{
        //margin: `0 auto`,
        //maxWidth: 1000,
        display: `inline-block`,
        height: `320px`,
        width: `100%`,
        //padding: `0.5rem`,
        backgroundImage: `url(${back})`,
        backgroundSize: `cover`,
        backgroundColor: `#02031b`,
        // animation: `bgAnime 20s infinite`
      }}
    >
      <p
        style={{
          margin: 0,
          fontSize: `60px`,
          textAlign: `center`,
          padding: `2rem`,

          paddingTop: `8rem`,
        }}
      >
        <Link
          to="/"
          style={{
            color: `#2196F3`,
            textDecoration: `none`,
            fontSize: `70px`
          }}
        >
          <b>{siteTitle}</b>
        </Link>
      </p>
      <div style={{ paddingTop: `6rem` }} />
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
