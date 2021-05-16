import React from 'react';
import styled from 'styled-components';

import Album from './album';

const Container = styled.div`
`;

const AlbumsWrap = styled.div`
  display: flex;
  overflow-y: hidden;
  padding-top: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Albums = (props) => {
  const { edges } = props[1];
  const { genre } = edges[0].node;

  if (!Array.isArray(edges)) return null;

  if (edges.length < 1) {
    return (
      <Container>
        <p>
          Content is on the way - stay tuned!
        </p>
      </Container>
    );
  };

  return (
    <Container>
      <h1>{genre.name}</h1>
      <AlbumsWrap>
        {edges.map((edge, pos) => {
          return (
            <Album key={pos} {...edge.node} />
          )
        })}
      </AlbumsWrap>
    </Container>
  )
};

export default Albums;
