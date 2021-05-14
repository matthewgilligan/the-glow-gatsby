import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import MainLayout from './../layouts/MainLayout';
import { DarkScheme } from './../helpers/navColors.js';
import TextBody from './../components/TextBody';

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const Banner = styled.div`
  position: relative;
  background-color: black;
  height: 65vh;
  color: white;
  text-align: center;
  margin-bottom: 300px;
`;

const BannerTextWrap = styled.div`
  position: relative;
  width: 50%;
  margin: 0 auto;
  padding-top: 100px;

  h1 {
    font-size: 50px;
  }
  p {
    font-family: 'Lexend Tera';
    font-size: 12px;
    text-transform: uppercase;
  }
`;

const BannerImg = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(200px);
`;

const BannerImgWrap = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  h2 {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 100%;
    font-family: 'Lexend Tera';
    margin: 0;
    padding: 0;
    font-size: 160px;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px gray;
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 50%;
    /* transform: translateY(200px); */
  }
`;

const Body = styled.div`
  
`;

const SelectorTemplate = (props) => {
  const { title, body, coverImage, publishedDate, authors, artists } = props.data.strapiFeatures;

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
              <img src={coverImage.publicURL} alt=""/>
              <h2>Selector</h2>
            </BannerImgWrap>
          </BannerImg>
        </Banner>
        <TextBody content={body} />
      </Container>
    </MainLayout>
  )
};

export const query = graphql`
  query($slug: String!){
    strapiFeatures (slug: { eq: $slug }) {
      title
      body
      publishedDate(formatString:"MMMM D YYYY")
      authors {
        englishName
      }
      artists {
        englishName
      }
      coverImage {
        publicURL
      }
    }
  }
`

export default SelectorTemplate;