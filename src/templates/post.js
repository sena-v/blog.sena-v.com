import React from "react"
import { graphql,Link } from "gatsby"

import Layout from "../components/layout"

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

export default ({ data }) => {
  const post = data.markdownRemark
  return (
    <Layout>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <h4 style={{ marginLeft: `20px` }}>{createTags(post.frontmatter.tags)}</h4>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
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
