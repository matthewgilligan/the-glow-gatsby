import React from 'react';

import IndexLayout from './../layouts/IndexLayout';
import Guides from './../components/Guides';

const GuidesPage = (props) => {
	const { guides } = props.data;

	return (
		<IndexLayout title="Guides">
			<Guides {...guides} />
		</IndexLayout>
	);
};

export const query = graphql`
	query {
		guides : allContentfulGuide ( sort: { fields:publishedDate, order:DESC } ) {
			edges {
				node {
					subject
					slug
					publishedDate(formatString:"MMMM Do YYYY")
					coverImage {
						file {
							url
						}
						title
					}
				}
			}
		}
	}
`

export default GuidesPage;
