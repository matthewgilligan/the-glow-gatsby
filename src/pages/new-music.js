import React from 'react';
import { graphql } from 'gatsby';

import IndexLayout from 'layouts/IndexLayout';
import Albums from 'components/Albums';
import { OriginalScheme } from 'helpers/navColors.js';

const NewMusicIndex = ({ data }) => {
  const genres = Object.entries(data);

  return (
    <IndexLayout title='New Music' navColor={OriginalScheme}>
      {genres.map((genre, pos) => {
        return <Albums key={pos} {...genre} />;
      })}
    </IndexLayout>
  );
};

export const query = graphql`
  query {
    all: allStrapiAlbums(sort: { fields: releaseDate, order: DESC }) {
      edges {
        node {
          englishTitle
          slug
          artists {
            englishName
          }
          genre {
            name
          }
          releaseDate(formatString: "MMMM D YYYY")
          cover {
            url
          }
        }
      }
    }
    pop: allStrapiAlbums(
      sort: { fields: releaseDate, order: DESC }
      filter: { genre: { name: { eq: "Pop" } } }
    ) {
      edges {
        node {
          englishTitle
          slug
          artists {
            englishName
          }
          genre {
            name
          }
          releaseDate(formatString: "MMMM D YYYY")
          cover {
            url
          }
        }
      }
    }
    rock: allStrapiAlbums(
      sort: { fields: releaseDate, order: DESC }
      filter: { genre: { name: { eq: "Rock" } } }
    ) {
      edges {
        node {
          englishTitle
          slug
          artists {
            englishName
          }
          genre {
            name
          }
          releaseDate(formatString: "MMMM D YYYY")
          cover {
            url
          }
        }
      }
    }
    hiphop: allStrapiAlbums(
      sort: { fields: releaseDate, order: DESC }
      filter: { genre: { name: { eq: "Hip-Hop" } } }
    ) {
      edges {
        node {
          englishTitle
          slug
          artists {
            englishName
          }
          genre {
            name
          }
          releaseDate(formatString: "MMMM D YYYY")
          cover {
            url
          }
        }
      }
    }
    electronic: allStrapiAlbums(
      sort: { fields: releaseDate, order: DESC }
      filter: { genre: { name: { eq: "Electronic" } } }
    ) {
      edges {
        node {
          englishTitle
          slug
          artists {
            englishName
          }
          genre {
            name
          }
          releaseDate(formatString: "MMMM D YYYY")
          cover {
            url
          }
        }
      }
    }
    experimental: allStrapiAlbums(
      sort: { fields: releaseDate, order: DESC }
      filter: { genre: { name: { eq: "Experimental" } } }
    ) {
      edges {
        node {
          englishTitle
          slug
          artists {
            englishName
          }
          genre {
            name
          }
          releaseDate(formatString: "MMMM D YYYY")
          cover {
            url
          }
        }
      }
    }
    folk: allStrapiAlbums(
      sort: { fields: releaseDate, order: DESC }
      filter: { genre: { name: { eq: "Folk" } } }
    ) {
      edges {
        node {
          englishTitle
          slug
          artists {
            englishName
          }
          genre {
            name
          }
          releaseDate(formatString: "MMMM D YYYY")
          cover {
            url
          }
        }
      }
    }
  }
`;

export default NewMusicIndex;
