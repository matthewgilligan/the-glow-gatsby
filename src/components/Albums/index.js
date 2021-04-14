import React from 'react';

import './styles.scss';
import Album from './Album';

const Albums = (props) => {
  const { edges } = props[1];
  console.log(edges);
  const { genre } = edges[0].node;

  if (!Array.isArray(edges)) return null;

  if (edges.length < 1) {
    return (
      <div className="products">
        <p>
          Content is on the way - stay tuned!
        </p>
      </div>
    );
  };

  return (
    <div className="albums">
      <h1>{genre.name}</h1>
      {edges.map((edge, pos) => {
        return (
          <Album key={pos} {...edge.node} />
        )
      })}
    </div>
  )
};

export default Albums;
