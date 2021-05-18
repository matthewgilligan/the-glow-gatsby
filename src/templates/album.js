import React from 'react';
import { Link, graphql } from 'gatsby';

import MainLayout from './../layouts/MainLayout';
import { OriginalScheme } from './../helpers/navColors';

const AlbumTemplate = ({ data }) => {
  const { englishTitle, japaneseTitle, label } = data.strapiAlbums;

  return (
    <MainLayout navColor={OriginalScheme}>
      <h1>{englishTitle}</h1>
      {japaneseTitle && <h2>{japaneseTitle}</h2>}
      {label &&
        <Link to={`/label/${label.slug}`}>
          <h2>{label.englishName}</h2>
        </Link>
      }
    </MainLayout>
  )
};

export const query = graphql`
  query($slug: String!){
    strapiAlbums (slug: { eq: $slug }) {
      englishTitle
      japaneseTitle
      label {
        englishName
        slug
      }
    }
  }
`;

export default AlbumTemplate;