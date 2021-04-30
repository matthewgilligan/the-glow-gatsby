import React from 'react';

import './styles.scss';
import IndexLayout from './../layouts/IndexLayout';
import Selectors from '../components/Selectors';

const SelectorIndex = ({ data }) => {
	return (
		<IndexLayout title="Interviews" backgroundColor='black'>
			<Selectors {...data} />
		</IndexLayout>   
	);
};

export const query = graphql`
  query {
    allStrapiFeatures ( sort: { fields: publishedDate, order: DESC }, filter: { subcategory: { name: { eq: "Selector" } } } ) {
      edges {
        node {
          artists {
            englishName
          }
          coverImage {
            publicURL
          }
          slug
        }
      }
    }
  }
`;

export default SelectorIndex;
