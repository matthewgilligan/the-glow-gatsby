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
  &:first-of-type {
    padding-left: 0px;
  }
`;

const ImgWrap = styled.div`
  img {
    height: 170px;
  }
`;

const Details = styled.div`
  text-align: center;
  width: 170px;
  h3 {
    font-size: 16px;
    margin: 10px 0;
    &:first-of-type {
      margin-top: 15px;
    }
    &:last-of-type {
      font-weight: lighter;
      font-style: italic;
    }
  }
  p {
    font-size: 10px;
    font-weight: bolder;
    margin-top: .7rem;
    text-transform: uppercase;
    color: silver;
  }
`;

const Album = props => {
  const { englishTitle, artists, cover, slug, releaseDate } = props;

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
        <h3>{artists[0].englishName}</h3>
        <h3>{englishTitle}</h3>
        <p>{releaseDate}</p>
      </Details>
    </Container>
  )
};

export default Album;
