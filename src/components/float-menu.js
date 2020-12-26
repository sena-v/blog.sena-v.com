// import { Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// TOPディレクトリの時だけTwitterを表示する？

const FloatMenu = ({ userData }) => (
  <div
    style={{
      paddingTop: `1rem`,
      textAlign: `right`,
      backgroundColor: `#2F2D32`,
      //paddingLeft: `30px`
    }}
  >
    <div
      style={{
        floatMenu: `left`,
        // position: `fixed`,
        // width: `240px`,
        // height: `500px`,
        padding: `0.1rem`,
        margin: `0 auto`,
        textAlign: `center`,
        fontFamily: "Helvetica Neue",
        // background: `#CE4532`,
        borderRadius: `15px`,
      }}
    >
      {/* <div
        style={{
          floatMenu: `left`,
          position: `fixed`,
          width: `400px`,
          height: `150px`,
          padding: `1rem`,
          margin: `0 auto`,
          textAlign: `left`,
          fontFamily: "Helvetica Neue",
          borderRadius: `15px`,
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
          a
        </a>
        <br />
        <a href={userData.GitHubUrl} rel="noreferrer" target="_blank">
          b
        </a>
        <br />
        <a href={userData.QiitaUrl} rel="noreferrer" target="_blank">
          c
        </a>
        <br />
      </div> */}
      <br />
      <div
        style={{
          marginTop: `300px`,
        }}
      >
        <a
          className="twitter-timeline"
          data-lang="ja"
          data-width="350px"
          data-height="500px"
          data-dnt="true"
          data-theme="dark"
          href="https://twitter.com/card1nal_tetra?ref_src=twsrc%5Etfw"
        >
        </a>
      </div>
    </div>
  </div>
)

FloatMenu.propTypes = {
  siteTitle: PropTypes.string,
}

FloatMenu.defaultProps = {
  userData: {
    userName: `sena-v`,
    TwitterUrl: `https://twitter.com/card1nal_tetra`,
    GitHubUrl: `https://github.com/sena-v`,
    QiitaUrl: `https://qiita.com/sena_v`,
  },
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            title
            date(formatString: "YYYY年MM月DD日")
            tags
            slug
          }
          excerpt
        }
      }
    }
  }
`

export default FloatMenu

// アイコン：ttps://qiita.com/tkit/items/932316c5f5f7b162b61e#github
// twitterモジュール追加：https://takumon.com/2018/10/07/