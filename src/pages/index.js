import React from "react"
import { graphql, Link } from "gatsby"
import Helmet from "react-helmet"

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
      <Link key={tag} to={"/tags/" + tag} className="tag">
        {tag}
      </Link>
    </ul>
  ))
}

const IndexPage = ({ data }) => (
  <Layout>
    <Helmet>
      <title>sena-v.com</title>
      <meta name="description" content="sena-v.com" />
      <html lang="ja" />
    </Helmet>
    {data.allMarkdownRemark.edges.map(({ node }) => (
      <article key={node.frontmatter.slug}>
        <h2>
          <Link
            to={`/${node.frontmatter.slug}`}
            aria-label={node.frontmatter.title}
          >
            {node.frontmatter.title}
          </Link>
        </h2>
        <div>{createTags(node.frontmatter.tags)}</div>
        <time dateTime={node.frontmatter.date}>{node.frontmatter.date}</time>
        <p>{node.excerpt}</p>
      </article>
    ))}
  </Layout>
)

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

export default IndexPage
