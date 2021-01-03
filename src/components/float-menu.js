import { useStaticQuery, Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"

// TOPディレクトリの時だけTwitterを表示する？

const createTags = data => {
  return (
    <ul
      key={data.tag}
      style={{
        marginLeft: `0px`,
        marginBottom: `10px`,
        marginRight: `10px`,
        display: `inline-block`,
        backgroundColor: `#98e1ff`,
        paddingLeft: `5px`,
        paddingRight: `5px`,
        borderRadius: `5px`,
      }}
      className="tag"
    >
      <Link key={data.tag} to={"/tags/" + data.tag} className="tag" aria-label={data.tag}>
        {data.tag}<font style={{fontSize: `9px`}}>({data.totalCount})</font>
      </Link>
    </ul>
  )
}

const FloatMenu = () => {
  const data = useStaticQuery(
    graphql`
    query {
      allMarkdownRemark(limit: 1000) {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `
  )

  return (
    <div
      style={{
        paddingTop: `1rem`,
        textAlign: `right`,
        backgroundColor: `#2F2D32`,
        paddingLeft: `40px`,
        paddingRight: `600px`,
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
          width: `330px`,
        }}
      >
        <div
          style={{
            width: `330px`,
            // padding: `1rem`,
            margin: `0 auto`,
            textAlign: `left`,
            fontFamily: "Helvetica Neue",
            borderRadius: `15px`,
            marginRight: `20px,`,
          }}
        >
          <p
            style={{
              // paddingLeft: `30%`,
              textAlign: `center`,
              marginBottom: `20px`,
              width: `320px`,
              borderTop: `none`,
              borderLeft: `none`,
              borderRight: `none`,
              borderBottom: `3px double`,
              fontWeight: `bold`,
              borderColor: `rgb(47, 45, 50) rgb(47, 45, 50) #ffffff rgb(47, 45, 50)`,
            }}
          >
            Tags
          </p>
          <div style={{ width: `320px` }}>
            {data.allMarkdownRemark.group.map(node => createTags(node))}
          </div>
          <p
            style={{
              paddingTop: `10px`,
              textAlign: `center`,
              marginBottom: `20px`,
              width: `320px`,
              borderTop: `none`,
              borderLeft: `none`,
              borderRight: `none`,
              borderBottom: `3px double`,
              fontWeight: `bold`,
              borderColor: `rgb(47, 45, 50) rgb(47, 45, 50) #ffffff rgb(47, 45, 50)`,
            }}
          ></p>
          <br />
        </div>

        <div
          style={{
            textAlign: `left`,
          }}
        >
          <a
            className="twitter-timeline"
            data-lang="ja"
            data-width="330px"
            data-height="600px"
            data-dnt="true"
            data-theme="dark"
            href="https://twitter.com/card1nal_tetra?ref_src=twsrc%5Etfw"
          >
            &nbsp;
          </a>
        </div>

        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
        ></script>
        <ins
          class="adsbygoogle"
          style={{display:`block`}}
          data-ad-client="ca-pub-5515095500922112"
          data-ad-slot="7682109354"
          data-ad-format="auto"
          data-full-width-responsive="true"
        ></ins>
        <script>(adsbygoogle = window.adsbygoogle || []).push({});</script>
      </div>
    </div>
  )
}

FloatMenu.propTypes = {
  siteTitle: PropTypes.string,
}

FloatMenu.defaultProps = {
  //emunで入れたいものがあれば使用
}

export default FloatMenu

// アイコン：ttps://qiita.com/tkit/items/932316c5f5f7b162b61e#github
// twitterモジュール追加：https://takumon.com/2018/10/07/
