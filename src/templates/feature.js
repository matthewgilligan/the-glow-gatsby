import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import { formatAuthor } from '../helpers/formatLists';

import FeatureLayout from './../layouts/FeatureLayout';
import TextBody from './../components/TextBody';

const Container = styled.div`
  position: relative;
  height: 100%;
`;

const Banner = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: -1;
  background-size: cover;
  background-position: center;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const Title = styled.div`
  position: absolute;
  bottom: 0;
  width: 1000px;
  margin: 0 0 80px 180px;
  color: white;
  p {
    font-family: 'Lexend Tera';
    font-size: 16px;
    text-transform: uppercase;
  }
`;

const Body = styled.div`
  width: calc(100vw - 81px);
  background-color: white;
  float: right;
  transform: translateY(100vh);
  div:first-of-type {
    margin-top: 100px;
  }
`;

const FeatureTemplate = (props) => {
  const { title, body, subtitle, coverImage, publishedDate, authors, artists } = props.data.strapiFeatures;

  const author = formatAuthor(authors);

  return (
    <FeatureLayout>
      <Container>
        <Banner style={{backgroundImage: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)), url(${process.env.IMAGE_BASE_URL + coverImage.url})`}}>
          <Title>
            <h1>{title}</h1>
            <p>{publishedDate}</p>
          </Title>
        </Banner>
        <Body>
          <TextBody body={body} subtitle={subtitle} artists={artists} />
        </Body>
      </Container>
    </FeatureLayout>
  )
};

export const query = graphql`
  query($slug: String!){
    strapiFeatures (slug: { eq: $slug }) {
      title
      subtitle
      body
      publishedDate(formatString:"MMMM D YYYY")
      authors {
        englishName
      }
      artists {
        englishName
        slug
      }
      coverImage {
        url
      }
    }
  }
`

export default FeatureTemplate;