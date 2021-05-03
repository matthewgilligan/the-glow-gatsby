import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components";

const Container = styled.div`
  width: 450px;
  margin: 0 auto 100px;
  img {
    height: 550px;
    width: 450px;
    object-fit: cover;
  }
`;

const Selectors = ({ node }) => {
  const { artists, coverImage, slug } = node;

  return (
    <Container>
      <Link to={`${slug}`}>
        {coverImage && <img src={coverImage.publicURL} alt=""/>}
        {/* <h1>{artists[0].englishName}</h1> */}
      </Link>
    </Container>
  )
};

export default Selectors;
