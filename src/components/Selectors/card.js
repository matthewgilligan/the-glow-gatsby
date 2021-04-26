import React from 'react';

const Selector = (props) => {
  console.log(props.index);
  const { artists, coverImage } = props.node;

  return (
    <div className="playlist">
      {coverImage && <img src={coverImage.publicURL} alt=""/>}
      <h1>{artists[0].englishName}</h1>
    </div>
  )
};

export default Selector;
