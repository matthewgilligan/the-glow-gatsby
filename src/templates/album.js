import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import MainLayout from './../layouts/MainLayout';
import { OriginalScheme } from './../helpers/navColors';

const NavBarImg = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 80px;
  height: 100vh;
  img {
    object-fit: cover;
    width: 80px;
  height: 100vh;
  }
`;

const AlbumTemplate = ({ data }) => {
  const { englishTitle, japaneseTitle, artists, cover, releaseDate, label } = data.strapiAlbums;

  console.log(cover)

  return (
    <MainLayout navColor={OriginalScheme}>
      <NavBarImg>
        <img src={`${process.env.IMAGE_BASE_URL}${cover[0].url}`} alt=""/>
      </NavBarImg>
      <h1>{englishTitle}</h1>
      {japaneseTitle && <h2>{japaneseTitle}</h2>}
      <Link to={`/artist/${artists[0].slug}`}>
        <h2>{artists[0].englishName}</h2>
      </Link>
      <img src={`${process.env.IMAGE_BASE_URL}${cover[0].url}`} alt=""/>
      <p>{releaseDate}</p>
      {label &&
        <Link to={`/label/${label.slug}`}>
          <p>{label.englishName}</p>
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
      releaseDate(formatString:"MMMM Do YYYY")
      artists {
        englishName
        slug
      }
      cover {
        url
      }
      label {
        englishName
        slug
      }
    }
  }
`;

export default AlbumTemplate;