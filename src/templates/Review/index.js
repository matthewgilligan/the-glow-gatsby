import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import './styles.scss';
import MainLayout from './../../layouts/MainLayout';

const Review = (props) => {
  const { albumCover, artist, albumTitle, label, initialReleaseDate } = props.data.contentfulReview;

  return (
    <MainLayout>
      <div className="albumBanner">
        <Img
          fluid={albumCover.fluid}
          key={albumCover.fluid.src}
          alt={albumCover.title}
          className="albumCover">
        </Img>
        <div className="albumDetails">
          <Link to={`../../artist/${artist[0].slug}`}>
            <h1 className="artistName">{artist[0].englishName}</h1>
          </Link>
          <h1 className="albumTitle">{albumTitle}</h1>
          <p className="label">{label} &nbsp;&nbsp;• &nbsp;&nbsp;{initialReleaseDate}</p>
        </div>
      </div>
    </MainLayout>
  )
};

export const query = graphql`
  query($slug: String!){
    contentfulReview (slug: { eq: $slug }) {
      albumTitle
      description
      slug
      artist {
        englishName
        slug
      }
      author {
        englishName
        slug
      }
      publishedDate(formatString:"MMMM D YYYY")
      rating
      label
      initialReleaseDate(formatString:"YYYY")
      category {
        name
      }
      albumCover {
        title
        file {
          url
        }
        fluid {
          ...GatsbyContentfulFluid
        }
      }
      genre {
        name
      }
      body {
        json
      }
      subtitle {
        json
      }
    }
  }
`

export default Review;