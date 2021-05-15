import React from 'react';
import { graphql, Link } from 'gatsby';
import styled from 'styled-components';
import formatAuthor from './../helpers/formatAuthor';

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
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

const ImgWrap = styled.div`
  height: 100vh;
`;

const Details = styled.div`
  position: absolute;
  bottom: 0;
  width: 1000px;
  margin: 0 0 80px 180px;
`;

const Credit = styled.div`
  display: flex;
  color: white;
  font-size: 2rem;
  a {
    color: white;
  }
  h1 {
    margin: 0;
    color: black;
    font-size: 8rem;
  }
  p {
    &:first-of-type {
      a {
        margin-right: 40px;
      }
    }
  }
`;

const Body = styled.div`
  width: calc(100vw - 80px);
  background-color: white;
  float: right;
  transform: translateY(100vh);
`;

const FeatureTemplate = (props) => {
  const { title, body, coverImage, publishedDate, authors, artists } = props.data.strapiFeatures;

  const author = formatAuthor(authors);

  return (
    <FeatureLayout>
      <Container>
        <Banner>
          <img src={coverImage.publicURL} alt=""/>
          <Details>
            <h1>{title}</h1>
            <Credit>
              <p>{publishedDate}</p>
              <Link to="">
                <p className="author">{author}</p>
              </Link>
            </Credit>
            {/* <h1>{artists[0].englishName}</h1> */}
          </Details>
        </Banner>
        <Body>
          <TextBody body={body} style={{zIndex:10000}} />
        </Body>
      </Container>
    </FeatureLayout>
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

export default FeatureTemplate;