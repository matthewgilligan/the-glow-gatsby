import React from 'react';
import { Link } from 'gatsby';
import styled from "styled-components";

const Card = styled.div`
  flex-basis: calc(25% - 30px);
  padding: 0 15px;
  margin-bottom: 50px;
  img {
    height: 300px;
    width: 200px;
    object-fit: cover;
  }
`;

const Selector = (props) => {
  const { artists, coverImage, slug } = props.node;

  return (
    <Card>
      <Link to={`${slug}`}>
        {coverImage && <img src={coverImage.publicURL} alt=""/>}
        <h1>{artists[0].englishName}</h1>
      </Link>
    </Card>
  )
};

export default Selector;
