import React from 'react';
import styled from "styled-components";

const Card = styled.div`
  flex-basis: calc(25% - 30px);
  padding: 0 15px;
  margin-bottom: 50px;
  img {
    height: 170px;
    width: 100px;
    object-fit: cover;
  }
`;

const Selector = (props) => {
  const { artists, coverImage } = props.node;

  return (
    <Card>
      {coverImage && <img src={coverImage.publicURL} alt=""/>}
      <h1>{artists[0].englishName}</h1>
    </Card>
  )
};

export default Selector;
