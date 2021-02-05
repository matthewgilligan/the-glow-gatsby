const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const reviewTemplate = path.resolve('./src/templates/Review/index.js')

  const reviewRes = await graphql(`
    query {
      allContentfulReview {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  reviewRes.data.allContentfulReview.edges.forEach((edge) => {
    createPage({
      component: reviewTemplate,
      path: `/reviews/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}
