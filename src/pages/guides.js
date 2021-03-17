import React from 'react';

import IndexLayout from './../layouts/IndexLayout';
import Guides from './../components/Guides';

const GuidesPage = (props) => {
	const { guides } = props.data;

	return (
		<div>
			<Guides {...guides} />
		</div>
	);
};

export const query = graphql`
	query {
		guides : allContentfulGuide ( sort: { fields:publishedDate, order:DESC } ) {
			edges {
				node {
					subject
					slug
					genre {
						name
					}
					publishedDate(formatString:"MMMM Do YYYY")
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
	}
`

export default GuidesPage;
