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
        position: `absolute`,
        bottom: `0`,
        left: `0`,
        width: `100%`,
        height: `100px`,
        padding: `1.4rem 1.0875rem`,
        margin: `0 auto`,
        backgroundColor: `#fff0ed`,
      }}
    >

        <Link
          to="/"
          style={{
            color: `white`,
            textDecoration: `none`,
          }}
        ></Link>
          <font size="6" color="#B1221A">Author: <b>{userData.userName}</b></font>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <a href={userData.TwitterUrl} rel="noreferrer" target="_blank">Twitter</a> / <a href={userData.GitHubUrl} rel="noreferrer" target="_blank">GitHub</a> / <a href={userData.QiitaUrl} rel="noreferrer" target="_blank">Qiita</a>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
