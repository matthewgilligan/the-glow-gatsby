import React from 'react';
import styled from 'styled-components';
import { Link, graphql } from 'gatsby';

import TextBody from 'components/TextBody';
import MainLayout from 'layouts/MainLayout';
import { LightScheme } from 'helpers/navColors';

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
  background-color: pink;
`;

const BannerWrap = styled.div`
  position: absolute;
  display: flex;
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

const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

const Body = styled.div`
  width: 60%;
  max-width: 700px;
  padding: 0 100px;
  transform: translateY(-125px);
`;

const Details = styled.div`
  margin: 60px 100px 0 0;
  width: 400px;
  h3 {
    font-family: 'Lexend Tera';
    text-transform: uppercase;
    font-size: 18px;
    margin: 0 0 10px;
  }
`;

const Info = styled.div`
  display: flex;
`;

const Keys = styled.div`
  width: 120px;
  font-weight: bolder;
`;

const Values = styled.div`
  a {
    text-decoration: underline;
    text-decoration-color: #e7334d;
  }
`;

const AlbumTemplate = ({ data }) => {
  const {
    englishTitle,
    japaneseTitle,
    artists,
    body,
    cover,
    releaseDate,
    genre,
    label,
  } = data.strapiAlbums;

  console.log(cover);

  return (
    <MainLayout navColor={LightScheme}>
      <NavBarImg>
        <img src={`${process.env.IMAGE_BASE_URL}${cover[0].url}`} alt='' />
      </NavBarImg>
      <Banner>
        <BannerWrap>
          <TextWrap>
            <Link to={`/artist/${artists[0].slug}`}>
              <h2>{artists[0].englishName}</h2>
            </Link>
            <h1>{englishTitle}</h1>
            {japaneseTitle && <h2>{japaneseTitle}</h2>}
          </TextWrap>
          <ImgWrap>
            <img src={`${process.env.IMAGE_BASE_URL}${cover[0].url}`} alt='' />
          </ImgWrap>
        </BannerWrap>
      </Banner>
      <Content>
        <Body>
          <TextBody body={body} />
        </Body>
        <Details>
          <h3>Release Info</h3>
          <Info>
            <Keys>
              <p>Type</p>
              <p>Genre</p>
              <p>Released</p>
              {label && <p>Label</p>}
            </Keys>
            <Values>
              <p>Album</p>
              <p>{genre.name}</p>
              <p>{releaseDate}</p>
              {label && (
                <Link to={`/label/${label.slug}`}>
                  <p>{label.englishName}</p>
                </Link>
              )}
            </Values>
          </Info>
        </Details>
      </Content>
    </MainLayout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    strapiAlbums(slug: { eq: $slug }) {
      englishTitle
      japaneseTitle
      releaseDate(formatString: "MMMM Do YYYY")
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
