import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { OriginalScheme } from 'helpers/navColors';

import { Container } from './styled';

const AuthorTemplate = ({ data }) => {
  const { englishName, japaneseName } = data.strapiAuthors;

  return (
    <MainLayout navColor={OriginalScheme}>
      <Container>
        <h1>{englishName}</h1>
        {japaneseName && <h2>{japaneseName}</h2>}
      </Container>
    </MainLayout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    strapiAuthors(slug: { eq: $slug }) {
      englishName
      japaneseName
    }
  }
`;

export default AuthorTemplate;
