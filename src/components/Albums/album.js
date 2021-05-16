import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  min-height: 100px;
  transition: transform 450ms;
  padding: 0 15px;
  margin-bottom: 50px;
  &:hover {
    transform: scale(1.08);
  }
`;

const ImgWrap = styled.div`
  img {
    height: 170px;
  }
`;

const Details = styled.div`
`;

const Album = props => {
  const { englishTitle, artists, cover, slug } = props;

  return (
    <Container>
      <Link to={`/album/${slug}`}>
        <ImgWrap>
          <img 
            src={`http://localhost:1337${cover[0].url}`} 
            alt=""
            className="image"
            />
        </ImgWrap>
      </Link>
      
      <Details>
        <h3>{englishTitle}</h3>
        <h3>{artists[0].englishName}</h3>
      </Details>
    </Container>
  )
};

export default Album;
