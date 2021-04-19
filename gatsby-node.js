const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions

	const featureTemplate = path.resolve('./src/templates/Feature/index.js')
	const artistTemplate = path.resolve('./src/templates/Artist/index.js')
	const reviewTemplate = path.resolve('./src/templates/Review/index.js')

	const res = await graphql(`
		query {
			allContentfulFeature ( filter: { category:{ name: { ne: "Interviews" } } } ) {
				edges {
					node {
						slug
					}
				}
			}
			allStrapiArtists {
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
			interviews: allContentfulFeature ( filter: { category:{ name: { eq: "Interviews" } } } ) {
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

	res.data.allStrapiArtists.edges.forEach((edge) => {
		createPage({
			component: artistTemplate,
			path: `/artists/${edge.node.slug}`,
			context: {
				slug: edge.node.slug
			}
		})
	})

	res.data.interviews.edges.forEach((edge) => {
		createPage({
			component: featureTemplate,
			path: `/interviews/${edge.node.slug}`,
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
