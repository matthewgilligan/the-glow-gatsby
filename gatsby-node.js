const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const reviewTemplate = path.resolve('./src/templates/Review/index.js')
  const featureTemplate = path.resolve('./src/templates/Feature/index.js')

  const res = await graphql(`
    query {
      allContentfulFeature {
        edges {
          node {
            slug
          }
        }
      }
      allContentfulReview {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)

  res.data.allContentfulFeature.edges.forEach((edge) => {
    createPage({
      component: featureTemplate,
      path: `/features/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })

  res.data.allContentfulReview.edges.forEach((edge) => {
    createPage({
      component: reviewTemplate,
      path: `/reviews/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
}
