import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

const Container = styled.div`
  flex-basis: calc(33.3333% - 30px);
  padding: 0 15px;
  margin-bottom: 50px;
`;

const ImgWrap = styled.div`
  width: 100%;
  height: 170px;
  img {
    height: 100%;
    width: 100%;
    object-fit: cover;
  }
`;

const TextWrap = styled.div`
  h2 {
    margin: 0;
    font-size: 1.6rem;
    font-weight: normal;
    line-height: 1.2;
  }
`;

const Info = styled.div`
  display: flex;
  -webkit-box-pack: start;
  justify-content: flex-start;
  font-style: normal;
  font-weight: normal;
  font-size: 1.1rem;
  line-height: 1;
  text-transform: uppercase;
  margin-top: 5px;
  span {
    margin: 0 8px;
  }
`;


const Feature = ({ node }) => {
  const { title, category, slug, publishedDate, authors, artists, coverImage } = node;

  let authorsFormatted = "";
  if (authors.length > 1) {
    authorsFormatted = `${authors[0].englishName} & ${authors[1].englishName}`
  } else if (authors.length > 0) {
    authorsFormatted = authors[0].englishName
  } else {
    authorsFormatted = "The Glow"
  };

  if (authorsFormatted.length > 23) {
    authorsFormatted = `${authorsFormatted.substring(0,23)}...`;
  }


  return (
    <Container>
      <ImgWrap>
        <Link to={`./${slug}`}>
          <img src={coverImage.publicURL} alt="" />
        </Link>
      </ImgWrap>
      <TextWrap>
        <Info>
          <p className="type"><strong>{category.name}</strong> <span>|</span>By {authorsFormatted}</p>
          {/* <p className="author">{author[0].englishName}</p> */}
        </Info>
        <h2>{category.name === "Review" ? `Review: ${artists[0].englishName} - ${title}` : title}</h2>
      </TextWrap>
    </Container>
  )
};

export default Feature;
