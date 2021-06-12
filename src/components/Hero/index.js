import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';

const Container = styled.div`
  height: 100vh;
  width: 100%;
  overflow: hidden;
  img {
    object-fit: cover !important;
  }
`;

const Hero = (props) => {
  const { slug, coverImage } = props.edges[0].node;

  return (
    <Container>
      <Link to={`/interviews/${slug}`}>
        <img src={process.env.IMAGE_BASE_URL + coverImage.url} alt='' />
      </Link>
    </Container>
  );
};

export default Hero;
