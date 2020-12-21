import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import iconTw from '../images/twitter.png'
import iconGi from '../images/github.png'
import iconQi from '../images/qiita.png'


const Float = ({ userData }) => (
  <div
    style={{
    marginTop: `1rem`,
    marginRight: `1rem`,
    marginBottom: `1rem`,
    marginLeft: `3rem`,
    textAlign: `right`,
    }}
  >
    <div
      style={{
        float: `left`,
        position: `fixed`,
        width: `100px`,
        height: `500px`,
        padding: `1.2rem 1.0875rem`,
        margin: `0 auto`,
        textAlign: `center`,
        fontFamily: "Helvetica Neue",
      }}
    >
      <Link
        to="/"
        style={{
          color: `white`,
          textDecoration: `none`,
        }}
      ></Link>
      <a href={userData.TwitterUrl} rel="noreferrer" target="_blank">
        <img src={iconTw} alt='画像' width="30px" height="30px"/>
      </a>
      <br />
      <a href={userData.GitHubUrl} rel="noreferrer" target="_blank">
        <img src={iconGi} alt='画像' width="30px" height="30px"/>
      </a>
      <br />
      <a href={userData.QiitaUrl} rel="noreferrer" target="_blank">
        <img src={iconQi} alt='画像' width="30px" height="30px"/>
      </a>
      <br />
    </div>
  </div>
)

Float.propTypes = {
  siteTitle: PropTypes.string,
}

Float.defaultProps = {
  userData: {
    userName: `sena-v`,
    TwitterUrl: `https://twitter.com/card1nal_tetra`,
    GitHubUrl: `https://github.com/sena-v`,
    QiitaUrl: `https://qiita.com/sena_v`,
  },
}

export default Float

// アイコン：ttps://qiita.com/tkit/items/932316c5f5f7b162b61e#github