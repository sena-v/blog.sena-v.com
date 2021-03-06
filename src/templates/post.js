import React from "react"
import { graphql,Link } from "gatsby"

import Layout from "../components/layout"
import SharingButtons from "../components/sharing-button"
import 'react-sharingbuttons/dist/main.css';

const createTags = tags => {
  return tags.map(tag => (
    <ul
      key={tag}
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
      <Link key={tag} to={"/tags/"+tag} className="tag">
        {tag}
      </Link>
    </ul>
  ))
}

export default ({ data, location }) => {
  const post = data.markdownRemark
  const siteUrl = "https://sena-v.com/";

  return (
    <Layout>
      <div>
        <title>{post.frontmatter.title}</title>
        <h1>{post.frontmatter.title}</h1>
        <h4 style={{ marginLeft: `20px` }}>
          {createTags(post.frontmatter.tags)}
        </h4>
        <div style={{textAlign: `right`, marginBottom: `20px`}}>
        <SharingButtons
          title={post.frontmatter.title}
          url={`${siteUrl}${location.pathname}`}
        />
        </div>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        <div style={{textAlign: `right`, marginTop: `20px`, marginBottom: `20px`}}>
        <SharingButtons
          title={post.frontmatter.title}
          url={`${siteUrl}${location.pathname}`}
        />
        </div>
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        tags
      }
    }
  }
`
