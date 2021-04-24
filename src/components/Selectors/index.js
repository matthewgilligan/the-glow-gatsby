import React from 'react';

import './styles.scss';
import Selector from './card.js';

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
          <Selector key={pos} {...edge} />
        )
      })}
    </div>
  )
};

export default Selectors;
