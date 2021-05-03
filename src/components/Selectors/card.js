import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components";

const Card = styled.div`
  padding: 0 15px;
  margin-bottom: 50px;
  img {
    height: 425px;
    width: 300px;
    object-fit: cover;
  }
  h1 {
    width: 300px;
    font-family: 'Lexend Tera';
    text-transform: uppercase;
    font-size: 20px;
    color: white;
  }
  &:nth-of-type(2n) {
    transform: translateX(50%);
  }
  &:nth-of-type(4n) {
    transform: translateX(20%);
  }
`;

const SelectorCard = ({ node }) => {
  const { artists, coverImage, slug } = node;

  return (
    <Card>
      <Link to={`${slug}`}>
        {coverImage && <img src={coverImage.publicURL} alt=""/>}
        <h1>{artists[0].englishName}</h1>
      </Link>
    </Card>
  )
};

export default SelectorCard;
