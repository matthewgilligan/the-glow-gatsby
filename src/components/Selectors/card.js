import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components";

const Card = styled.div`
  padding: 0 15px;
  margin-bottom: 50px;
  transform: translateX(15%);
  img {
    height: 350px;
    width: 250px;
    object-fit: cover;
  }
  h2 {
    width: 250px;
    font-family: 'Lexend Tera';
    text-transform: uppercase;
    font-size: 20px;
    color: white;
    span {
      color: rgba(255, 255, 255, 0.3);
      margin-right: 5px;
    }
  }
  &:nth-of-type(2n) {
    transform: translate(60%, -60%);
  }
`;

const SelectorCard = ({ node }) => {
  const { artists, coverImage, selectorID, slug } = node;

  return (
    <Card>
      <Link to={`${slug}`}>
        {coverImage && <img src={coverImage.publicURL} alt=""/>}
        <h2><span>#{selectorID}</span>{artists[0].englishName}</h2>
      </Link>
    </Card>
  )
};

export default SelectorCard;
