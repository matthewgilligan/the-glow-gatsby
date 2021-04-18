import React from 'react';

import './styles.scss';
import IndexLayout from './../layouts/IndexLayout';
import Albums from './../components/Albums';

const NewMusicIndex = ({ data }) => {
  const genres = Object.entries(data);

	return (
		<IndexLayout title="New Music">
      {genres.map((genre, pos) => {
        return (
          <Albums key={pos} {...genre} />
        )
      })}
		</IndexLayout>  
	);
};

export const query = graphql`
  query {
    pop: allStrapiAlbums ( filter: { genre:{ name: { eq: "Pop" } } } ) {
      edges {
        node {
          title
          artists {
            englishName
          }
          genre {
            name
          }
          cover {
            url
          }
        }
      }
    }
    rock: allStrapiAlbums ( filter: { genre:{ name: { eq: "Rock" } } } ) {
      edges {
        node {
          title
          artists {
            englishName
          }
          genre {
            name
          }
          cover {
            url
          }
        }
      }
    }
    hiphop: allStrapiAlbums ( filter: { genre:{ name: { eq: "Hip-Hop" } } } ) {
      edges {
        node {
          title
          artists {
            englishName
          }
          genre {
            name
          }
          cover {
            url
          }
        }
      }
    }
  }
`;

export default NewMusicIndex;
