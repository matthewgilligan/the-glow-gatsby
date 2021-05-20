import React from 'react';
import { Link, graphql } from 'gatsby';
import styled from 'styled-components';

import MainLayout from './../layouts/MainLayout';
import { LightScheme } from './../helpers/navColors';
import TextBody from './../components/TextBody';

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

const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  margin-bottom: 150px;
`;

const BannerWrap = styled.div`
  position: absolute;
  display: flex;
  max-width: 1350px;
  width: 100%;
  padding: 0 100px;
  justify-content: space-between;
  bottom: 0;
  transform: translateY(150px);
`;

const TextWrap = styled.div`
  max-width: 700px;
  width: 60%;
  h1 {
    margin: 0;
  }
  h2 {
    font-size: 18px;
    margin: 0 0 10px;
  }
`;

const ImgWrap = styled.div`
  width: 400px;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const Body = styled.div`
  width: 60%;
  max-width: 700px;
  padding: 0 100px;
  transform: translateY(-75px);
`;

const AlbumTemplate = ({ data }) => {
  const { englishTitle, japaneseTitle, artists, body, cover, releaseDate, genre, label } = data.strapiAlbums;

  console.log(cover)

  return (
    <MainLayout navColor={LightScheme}>
      <NavBarImg>
        <img src={`${process.env.IMAGE_BASE_URL}${cover[0].url}`} alt=""/>
      </NavBarImg>
      <Banner>
        <BannerWrap>
          <TextWrap>
            <Link to={`/artist/${artists[0].slug}`}>
              <h2>{artists[0].englishName}</h2>
            </Link>
            <h1>{englishTitle}</h1>
            {japaneseTitle && <h2>{japaneseTitle}</h2>}
            <p>{genre.name}</p>
            <p>{releaseDate}</p>
            {label &&
              <Link to={`/label/${label.slug}`}>
                <p>{label.englishName}</p>
              </Link>
            }
          </TextWrap>
          <ImgWrap>
            <img src={`${process.env.IMAGE_BASE_URL}${cover[0].url}`} alt=""/>
          </ImgWrap>
        </BannerWrap>
      </Banner>
      <Body>
        <TextBody body={body} />
      </Body>
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
      body
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