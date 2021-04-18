import React from 'react';

import './styles.scss';
import IndexLayout from './../layouts/IndexLayout';
import Features from './../components/Features';

const FeaturesIndex = ({ data }) => {
	return (
		<IndexLayout title="Features">
			<Features {...data}/>
		</IndexLayout>
	);
};

export const query = graphql`
  query {
    allStrapiFeatures (sort: { fields: publishedDate, order: DESC }) {
      edges {
        node {
          title
          artists {
            englishName
          }
          authors {
            englishName
          }
        }
      }
    }
  }
`

export default FeaturesIndex;
