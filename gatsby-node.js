const path = require('path')

module.exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions
  
	const featureTemplate = path.resolve('./src/templates/feature.js')
	const selectorTemplate = path.resolve('./src/templates/selector.js')
	const albumTemplate = path.resolve('./src/templates/album.js')
	const artistTemplate = path.resolve('./src/templates/artist.js')
	const authorTemplate = path.resolve('./src/templates/author.js')
	const labelTemplate = path.resolve('./src/templates/label.js')

	const res = await graphql(`
		query {
			features: allStrapiFeatures ( filter: { subcategory: { name: { ne: "Selector" } } } ) {
				edges {
					node {
						slug
					}
				}
      }
      selector: allStrapiFeatures ( filter: { subcategory: { name: { eq: "Selector" } } } ) {
				edges {
					node {
						slug
					}
				}
      }
      allStrapiAlbums {
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
      allStrapiAuthors {
				edges {
					node {
						slug
					}
				}
      }
      allStrapiLabels {
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

	res.data.features.edges.forEach((edge) => {
		createPage({
			component: featureTemplate,
			path: `/features/${edge.node.slug}`,
			context: {
				slug: edge.node.slug
			}
		})
  });
  
  res.data.selector.edges.forEach((edge) => {
		createPage({
			component: selectorTemplate,
			path: `/selector/${edge.node.slug}`,
			context: {
				slug: edge.node.slug
			}
		})
  });
  
  res.data.allStrapiAlbums.edges.forEach((edge) => {
		createPage({
			component: albumTemplate,
			path: `/album/${edge.node.slug}`,
			context: {
				slug: edge.node.slug
			}
		})
	});

	res.data.allStrapiArtists.edges.forEach((edge) => {
		createPage({
			component: artistTemplate,
			path: `/artist/${edge.node.slug}`,
			context: {
				slug: edge.node.slug
			}
		})
	});

	res.data.allStrapiAuthors.edges.forEach((edge) => {
		createPage({
			component: authorTemplate,
			path: `/author/${edge.node.slug}`,
			context: {
				slug: edge.node.slug
			}
		})
  });
  res.data.allStrapiLabels.edges.forEach((edge) => {
		createPage({
			component: labelTemplate,
			path: `/label/${edge.node.slug}`,
			context: {
				slug: edge.node.slug
			}
		})
	});
}
