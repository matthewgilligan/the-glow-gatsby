import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import MainLayout from './../layouts/MainLayout';

const Container = styled.div`
`;

const AuthorTemplate = ({ data }) => {
  const { englishName, japaneseName } = data.strapiAuthors;

  return (
    <MainLayout>
      <Container>
        <h1>{englishName}</h1>
        {japaneseName && <h2>{japaneseName}</h2>}
      </Container>
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