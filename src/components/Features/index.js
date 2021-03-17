import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import './styles.scss';
import Feature from './Feature';

const Features = (props) => {
	const data = useStaticQuery(graphql`
		query {
			allContentfulFeature(sort: { fields: publishedDate, order: DESC }) {
				edges {
					node {
						title
						subtitle {
							json
						}
						slug
						author {
							englishName
							slug
						}
						publishedDate
						category {
							name
						}
						genre {
							name
						}
						coverImage {
							file {
								url
							}
							title
							fluid {
								...GatsbyContentfulFluid
							}
						}
					}
				}
			}
			allContentfulReview ( sort: { fields:publishedDate, order:DESC } ) {
				edges {
					node {
						albumTitle
						slug
						publishedDate
						artist {
							englishName
						}
						albumCover {
							fluid {
								...GatsbyContentfulFluid
							}
							title
							file {
								url
							}
						}
					}
				}
			}
		}
	`)

	const features = data.allContentfulFeature.edges;
	const reviews = data.allContentfulReview.edges;
	const allArticles = [];

	features.forEach(edge => allArticles.push(edge));
	reviews.forEach(edge => allArticles.push(edge));
	
	if (!Array.isArray(features)) return null;

	if (features.length < 1) {
		return (
			<div className="products">
				<p>
					Content is on the way - stay tuned!
				</p>
			</div>
		);
	};

	return (
		<div className="features">
			{features.map((edge, pos) => {
				const configFeature = {
					...edge.node
				};

				return (
					<Feature key={pos} {...configFeature} />
				)
			})};
		</div>
	)
};

export default Features;
