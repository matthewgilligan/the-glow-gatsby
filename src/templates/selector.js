import React from 'react';
import { graphql } from 'gatsby';
import styled from 'styled-components';

import MainLayout from './../layouts/MainLayout';
import TextBody from './../components/TextBody';

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const Banner = styled.div`
  position: relative;
  background-color: black;
  height: 70vh;
  color: white;
  text-align: center;
  margin-bottom: 150px;
  h2 {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    font-family: 'Lexend Tera';
    margin: 0;
    padding: 0;
    font-size: 160px;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px gray;
    transform: translateY(76px);
  }
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

const BannerImgWrap = styled.div`
  
  
`;

const Body = styled.div`
  
`;

const SelectorTemplate = (props) => {
  const { title, body, publishedDate, authors, artists } = props.data.strapiFeatures;

  return (
    <MainLayout>
      <Container>
        <Banner>
          <BannerTextWrap>
            <h1>{artists[0].englishName}</h1>
            <p>{publishedDate}</p>
          </BannerTextWrap>
          <h2>Selector</h2>
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
    }
  }
`

export default SelectorTemplate;