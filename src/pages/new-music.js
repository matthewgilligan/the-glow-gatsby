import React from 'react';
import { graphql } from 'gatsby';

import IndexLayout from './../layouts/IndexLayout';
import { OriginalScheme } from './../helpers/navColors.js';
import Albums from './../components/Albums';

const NewMusicIndex = ({ data }) => {
  const genres = Object.entries(data);

	return (
		<IndexLayout title="New Music" navColor={OriginalScheme}>
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
          englishTitle
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
          englishTitle
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
          englishTitle
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
    electrpnic: allStrapiAlbums ( filter: { genre:{ name: { eq: "Electronic" } } } ) {
      edges {
        node {
          englishTitle
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
    experimental: allStrapiAlbums ( filter: { genre:{ name: { eq: "Experimental" } } } ) {
      edges {
        node {
          englishTitle
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
    folk: allStrapiAlbums ( filter: { genre:{ name: { eq: "Folk" } } } ) {
      edges {
        node {
          englishTitle
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
