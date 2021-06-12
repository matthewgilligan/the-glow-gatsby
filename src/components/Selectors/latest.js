import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
  margin: 0 auto;
  position: relative;
  width: 700px;
  height: 520px;
  margin: 0 auto 100px;
  text-align: center;
  img {
    z-index: 10;
    margin: 0 auto;
    height: 520px;
    width: 380px;
    object-fit: cover;
  }
  h2 {
    z-index: 100;
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    font-family: 'Lexend Tera';
    text-transform: uppercase;
    font-size: 30px;
    color: white;
  }
  p {
    position: absolute;
    top: 0;
    left: 0;
    color: rgba(255, 255, 255, 0.3);
    font-size: 300px;
    margin: 0;
    padding: 0;
  }
  p:last-of-type {
    top: auto;
    left: auto;
    bottom: 0;
    right: 0;
  }
`;

const Selectors = ({ node }) => {
  const { artists, coverImage, selectorID, slug } = node;

  return (
    <Container>
      <Link to={`${slug}`}>
        <p>#</p>
        <p>{selectorID}</p>
        {coverImage && (
          <img src={process.env.IMAGE_BASE_URL + coverImage.url} alt='' />
        )}
        <h2>{artists[0].englishName}</h2>
      </Link>
    </Container>
  );
};

export default Selectors;
