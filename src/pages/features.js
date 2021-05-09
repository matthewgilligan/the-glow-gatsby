import React from 'react';
import { graphql } from 'gatsby';

import IndexLayout from './../layouts/IndexLayout';
import { OriginalScheme } from './../helpers/navColors.js';
import Features from './../components/Features';

const FeaturesIndex = ({ data }) => {
	return (
		<IndexLayout title="Features" navColor={OriginalScheme}>
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
          slug
          artists {
            englishName
          }
          authors {
            englishName
          }
          category {
            name
          }
          coverImage {
            publicURL
          }
        }
      }
    }
  }
`

export default FeaturesIndex;
