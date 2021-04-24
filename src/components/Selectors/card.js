import React from 'react';

const Selector = ({ node }) => {
  const { artists } = node;

  return (
    <div className="playlist">
      <h1>{artists[0].englishName}</h1>
    </div>
  )
};

export default Selector;
