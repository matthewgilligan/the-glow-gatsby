import React from 'react';

import './styles.scss';
import Album from './Album';

const Albums = (props) => {
  const { edges } = props[1];

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
      {edges.map((edge, pos) => {
        return (
          <Album key={pos} {...edge.node} />
        )
      })}
    </div>
  )
};

export default Albums;
