const path = require(`path`)

exports.createPages = async gatsbyNodeHelpers => {
  const { graphql, actions } = gatsbyNodeHelpers
  const { createPage } = actions

  const result = await graphql(`
    query {
      posts: allMarkdownRemark {
        edges {
          node {
            frontmatter {
              slug
              tags
            }
          }
        }
      }
      tags: allMarkdownRemark(limit: 1000) {
        group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `)

  /**
   * テンプレートファイルを使用して属性ごとに複数ページを生成する
   */

  result.data.posts.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: path.resolve(`./src/templates/post.js`),
      context: {
        slug: node.frontmatter.slug
      }
    })
  })

  result.data.tags.group.forEach((data) => {
    createPage({
      path: `/tags/${data.tag}`,
      component: path.resolve(`./src/templates/tag.js`),
      context: {
        tag: data.tag,
        allTags: data,
      }
    })
  })
}