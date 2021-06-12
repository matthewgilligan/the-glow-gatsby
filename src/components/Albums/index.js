import React from 'react';

import AlbumCard from './Card';
import { AlbumsWrap } from './styled';

const Albums = (props) => {
  const { edges } = props[1];
  const genre = props[0] === 'all' ? 'All' : edges[0].node.genre.name;

  if (!Array.isArray(edges)) return null;

  if (edges.length < 1) {
    return (
      <>
        <p>Content is on the way - stay tuned!</p>
      </>
    );
  }

  return (
    <>
      <h1>{genre}</h1>
      <AlbumsWrap>
        {edges.map((edge, pos) => {
          return <AlbumCard key={pos} {...edge.node} />;
        })}
      </AlbumsWrap>
    </>
  );
};

export default Albums;
