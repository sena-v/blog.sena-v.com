import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ userData }) => (
  <footer
    style={{
      background: `#FFF176`,
      marginBottom: `1rem`,
    }}
  >
    <div
      style={{
        // position: `absolute`,
        position: `fixed`,
        bottom: `0`,
        left: `0`,
        width: `100%`,
        // height: `100px`,
        // padding: `0.2rem 1.0875rem`,
        margin: `0 auto`,
        backgroundColor: `#2F2D32`,
        textAlign: `center`,
        fontFamily: "Helvetica Neue",
      }}
    >
      <font size="2">Author: </font>
      <font size="4">
        <Link
          to="/about"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        >
          <b>{userData.userName}</b>
        </Link>
      </font>
      &nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;
      <font size="2">
        © {new Date().getFullYear()}, Built with
        {` `}
        Gatsby
      </font>
    </div>
  </footer>
)

Footer.propTypes = {
  siteTitle: PropTypes.string,
}

Footer.defaultProps = {
  userData: {
    userName: `sena-v`,
    TwitterUrl: `https://twitter.com/card1nal_tetra`,
    GitHubUrl: `https://github.com/sena-v`,
    QiitaUrl: `https://qiita.com/sena_v`,
  },
}

export default Footer
