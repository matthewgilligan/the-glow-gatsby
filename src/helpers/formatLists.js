import React from 'react';
import { Link } from 'gatsby';

export const formatAuthor = (authors) => {
  if (authors.length > 1) {
    return `${authors[0].englishName} & ${authors[1].englishName}`
  } else if (authors.length > 0) {
    return authors[0].englishName
  } else {
    return "The Glow"
  };
};

export const formatArtistTags = (artists) => {
  let artistTags = []

  console.log(artists);

  for (let i = 0; i < artists.length; i++) {
    if(i === artists.length -1){
      artistTags.push(<Link to={`/artist/${artists[i].slug}`}>{artists[i].englishName}</Link>)
    } else {
      artistTags.push(<Link to={`/artist/${artists[i].slug}`}>{artists[i].englishName}, </Link>)
    }
  };

  return artistTags;
};