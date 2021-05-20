import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import MainLayout from './../layouts/MainLayout';
import { LightScheme } from './../helpers/navColors';

const NavBarImg = styled.div`
  position: fixed;
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

const Container = styled.div`
  width: calc(100vw - 80px);
  float: right;
  padding: 0 60px;
`;

const AlbumTemplate = ({ data }) => {
  const { englishTitle, japaneseTitle, artists, cover, releaseDate, genre, label } = data.strapiAlbums;

  console.log(cover)

  return (
    <MainLayout navColor={LightScheme}>
      <NavBarImg>
        <img src={`${process.env.IMAGE_BASE_URL}${cover[0].url}`} alt=""/>
      </NavBarImg>
      <Container>
        <h1>{englishTitle}</h1>
        {japaneseTitle && <h2>{japaneseTitle}</h2>}
        <Link to={`/artist/${artists[0].slug}`}>
          <h2>{artists[0].englishName}</h2>
        </Link>
        <p>{genre.name}</p>
        <p>{releaseDate}</p>
        {label &&
          <Link to={`/label/${label.slug}`}>
            <p>{label.englishName}</p>
          </Link>
        }
        <img src={`${process.env.IMAGE_BASE_URL}${cover[0].url}`} alt=""/>
      </Container>
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
      genre {
        name
      }
      label {
        englishName
        slug
      }
    }
  }
`;

export default AlbumTemplate;