import React from 'react';
import { Link, graphql } from 'gatsby';

import TextBody from 'components/TextBody';
import MainLayout from 'layouts/MainLayout';
import { LightScheme } from 'helpers/navColors';

import {
  NavBarImg,
  Banner,
  BannerWrap,
  TextWrap,
  ImgWrap,
  Content,
  Body,
  Details,
  Info,
  Keys,
  Values,
} from './styled';

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
