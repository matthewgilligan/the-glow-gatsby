import React from 'react';
import { graphql } from 'gatsby';

import TextBody from 'components/TextBody';
import MainLayout from 'layouts/MainLayout';
import { DarkScheme } from 'helpers/navColors.js';

import {
  Container,
  Banner,
  BannerTextWrap,
  BannerImg,
  BannerImgWrap,
} from './styled';

const SelectorTemplate = ({ data }) => {
  const { body, subtitle, coverImage, publishedDate, artists } =
    data.strapiFeatures;

  return (
    <MainLayout navColor={DarkScheme}>
      <Container>
        <Banner>
          <BannerTextWrap>
            <h1>{artists[0].englishName}</h1>
            <p>{publishedDate}</p>
          </BannerTextWrap>
          <BannerImg>
            <BannerImgWrap>
              <img src={process.env.IMAGE_BASE_URL + coverImage.url} alt='' />
              <h2>Selector</h2>
            </BannerImgWrap>
          </BannerImg>
        </Banner>
        <TextBody body={body} subtitle={subtitle} />
      </Container>
    </MainLayout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    strapiFeatures(slug: { eq: $slug }) {
      title
      body
      subtitle
      publishedDate(formatString: "MMMM D YYYY")
      authors {
        englishName
      }
      artists {
        englishName
      }
      coverImage {
        url
      }
    }
  }
`;

export default SelectorTemplate;
