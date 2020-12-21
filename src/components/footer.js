import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

const Footer = ({ userData }) => (
  <footer
    style={{
      background: `#B1221A`,
      marginBottom: `1.4rem`,
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
        padding: `0.2rem 1.0875rem`,
        margin: `0 auto`,
        backgroundColor: `#fff0ed`,
        textAlign: `center`,
        fontFamily: "Helvetica Neue"
      }}
    >

        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        ></Link>
          <font size="2" color="#B1221A">Author: </font><font size="4" color="#B1221A"><b>{userData.userName}</b></font>&nbsp;&nbsp;
          &nbsp;&nbsp;&nbsp;&nbsp;
          <font size="2">© {new Date().getFullYear()}, Built with
          {` `}
          <a href="https://www.gatsbyjs.com">Gatsby</a></font>

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
