import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from './../layouts/MainLayout';

const AlbumTemplate = ({ data }) => {
  const { englishTitle, japaneseTitle } = data.strapiAlbums;

  return (
    <MainLayout>
      <h1>{englishTitle}</h1>
      {japaneseTitle && <h2>{japaneseTitle}</h2>}
    </MainLayout>
  )
};

export const query = graphql`
  query($slug: String!){
    strapiAlbums (slug: { eq: $slug }) {
      englishTitle
      japaneseTitle
    }
  }
`;

export default AlbumTemplate;