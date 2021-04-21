import React from 'react';
import { graphql } from 'gatsby';

import './styles.scss';
import MainLayout from './../../layouts/MainLayout';

const AuthorTemplate = ({ data }) => {
  const { englishName, japaneseName } = data.strapiAuthors;

  console.log(data);

  return (
    <MainLayout>
      <h1>{englishName}</h1>
      {japaneseName && <h2>{japaneseName}</h2>}
    </MainLayout>
  )
};

export const query = graphql`
  query($slug: String!){
    strapiAuthors (slug: { eq: $slug }) {
      englishName
      japaneseName
    }
  }
`;

export default AuthorTemplate;