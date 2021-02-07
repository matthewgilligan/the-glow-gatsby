const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions

	const featureTemplate = path.resolve('./src/templates/Feature/index.js')
	const guideTemplate = path.resolve('./src/templates/Guide/index.js')
	const newsTemplate = path.resolve('./src/templates/News/index.js')
	const reviewTemplate = path.resolve('./src/templates/Review/index.js')

	const res = await graphql(`
		query {
			allContentfulFeature {
				edges {
					node {
						slug
					}
				}
			}
			allContentfulGuide {
				edges {
					node {
						slug
					}
				}
			}
			allContentfulNews {
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

	res.data.allContentfulGuide.edges.forEach((edge) => {
		createPage({
			component: guideTemplate,
			path: `/guides/${edge.node.slug}`,
			context: {
				slug: edge.node.slug
			}
		})
	})

	res.data.allContentfulNews.edges.forEach((edge) => {
		createPage({
			component: newsTemplate,
			path: `/news/${edge.node.slug}`,
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
