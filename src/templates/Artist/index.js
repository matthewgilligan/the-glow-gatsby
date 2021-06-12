import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from 'layouts/MainLayout';
import { OriginalScheme } from 'helpers/navColors';

const ArtistTemplate = ({ data }) => {
  const { englishName, japaneseName } = data.strapiArtists;

  return (
    <MainLayout navColor={OriginalScheme}>
      <h1>{englishName}</h1>
      {japaneseName && <h2>{japaneseName}</h2>}
    </MainLayout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    strapiArtists(slug: { eq: $slug }) {
      englishName
      japaneseName
    }
  }
`;

export default ArtistTemplate;
