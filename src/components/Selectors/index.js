import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import './styles.scss';
import Playlist from './Playlist';

const Selectors = (props) => {
  const { edges } = props.allStrapiFeatures;
  
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
    <div className="playlists">
      {edges.map((edge, pos) => {
        return (
          <Playlist key={pos} {...edge} />
        )
      })};
    </div>
  )
};

export default Selectors;
