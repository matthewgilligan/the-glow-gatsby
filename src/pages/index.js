import React from 'react';
import { graphql } from 'gatsby';

import HomeLayout from 'layouts/HomeLayout';
import Hero from 'components/Hero';

const Home = (props) => {
  const { latestInterview } = props.data;

  return (
    <HomeLayout>
      <Hero {...latestInterview} />
    </HomeLayout>
  );
};

export const query = graphql`
  query {
    latestInterview: allStrapiFeatures(
      sort: { fields: publishedDate, order: DESC }
      filter: { subcategory: { name: { ne: "Selector" } } }
    ) {
      edges {
        node {
          title
          publishedDate(formatString: "MMMM Do YYYY")
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
            url
          }
        }
      }
    }
  }
`;

export default Home;
