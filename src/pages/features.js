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
    allStrapiFeatures (sort: { fields: publishedDate, order: DESC }, filter: { subcategory: { name: { ne: "Selector" } } }) {
      edges {
        node {
          title
          publishedDate(formatString:"MMMM Do YYYY")
          artists {
            englishName
          }
          authors {
            englishName
          }
          category {
            name
          }
        }
      }
    }
  }
`

export default FeaturesIndex;
