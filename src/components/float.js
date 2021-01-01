import PropTypes from "prop-types"
import React from "react"
import iconTw from '../images/twitter.png'
import iconGi from '../images/github.png'
import iconQi from '../images/qiita.png'
import top from '../images/scrollTop.png'

const scrollTop = () =>{
  window.scrollTo( 0, 0 )
}

const Float = ({ userData }) => (
  <div
    style={{
    paddingTop: `1rem`,
    paddingLeft: `1rem`,
    textAlign: `right`,
    backgroundColor: `#2F2D32`,
    }}
  >
    <div
      style={{
        float: `left`,
        position: `fixed`,
        // width: `100px`,
        height: `300px`,
        // padding: `1.2rem 1.0875rem`,
        margin: `1.5rem`,
        textAlign: `center`,
        fontFamily: "Helvetica Neue",
      }}
    >
      <div className='imgDiv'>
      <a href={userData.TwitterUrl} rel="noreferrer" target="_blank" aria-label="twitter">
        <img src={iconTw} alt='画像' width="30px" height="30px"/>
      </a>
      </div>
      <br />
      <div className='imgDiv'>
      <a href={userData.GitHubUrl} rel="noreferrer" target="_blank" aria-label="gitHub">
        <img src={iconGi} alt='画像' width="30px" height="30px"/>
      </a>
      </div>
      <br />
      <div className='imgDiv'>
      <a href={userData.QiitaUrl} rel="noreferrer" target="_blank" aria-label="Qiita">
        <img src={iconQi} alt='画像' width="30px" height="30px"/>
      </a>
      </div>
      <div style={{height: `200px`}} />
      <div className='imgDiv'>
      <img // eslint-disable-line jsx-a11y/no-noninteractive-element-interactions
      src={top} width="28px" height="28px" onClick={scrollTop} onKeyPress={scrollTop} alt="scroll top" />
      </div>
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