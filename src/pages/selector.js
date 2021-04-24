import React from 'react';

import './styles.scss';
import IndexLayout from './../layouts/IndexLayout';
import Selectors from '../components/Selectors';

const SelectorIndex = ({ data }) => {
	return (
		<IndexLayout title="Interviews">
			<Selectors {...data} />
		</IndexLayout>   
	);
};

export const query = graphql`
  query {
    allStrapiFeatures ( filter: { subcategory: { name: { eq: "Selector" } } } ) {
      edges {
        node {
          artists {
            englishName
          }
        }
      }
    }
  }
`;

export default SelectorIndex;
