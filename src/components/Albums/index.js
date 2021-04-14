import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import './styles.scss';
import Album from './Album';

const Albums = ({ edges }) => {
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
        const configAlbum = {
          ...edge.node
        };

        return (
          <Album key={pos} {...configAlbum} />
        )
      })}
    </div>
  )
};

export default Albums;
