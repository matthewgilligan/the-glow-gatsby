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
  /* position: fixed;
  top: 0;
  height: 100vh;
  width: 100%; */
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
  
`;

const FeatureTemplate = (props) => {
  const { title, body, publishedDate, authors, artists } = props.data.strapiFeatures;

  return (
    <MainLayout>
      <Container>
        <Banner>
          {/* <ImgWrap>
            <Img
              fluid={coverImage.fluid}
              key={coverImage.fluid.src}
              alt={coverImage.title}
              className="coverImage">
            </Img>
          </ImgWrap> */}
          <Details>
            <Credit>
              <p>{publishedDate}</p>
              {/* <Link to="">
                <p className="author">{authors[0].englishName}</p>
              </Link> */}
            </Credit>
            {/* <h1>{artists[0].englishName}</h1> */}
          </Details>
        </Banner>
        <TextBody content={body} style={{zIndex:10000}} />
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

export default FeatureTemplate;