import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import './styles.scss';
import MainLayout from './../../layouts/MainLayout';
import RichText from './../../components/RichText';

const ReviewTemplate = (props) => {
  const { albumCover, artist, author, publishedDate, albumTitle,
	label, initialReleaseDate, body } = props.data.contentfulReview;

  return (
    <MainLayout>
      <div className="guideTemplate">
			<div className="banner">
				<Img
					fluid={albumCover.fluid}
					key={albumCover.fluid.src}
					alt={albumCover.title}
					className="albumCover">
				</Img>
				<div className="details">
					<div className="credit">
						<p className="date">{publishedDate}</p>
						<Link to="">
							<p className="author">{author[0].englishName}</p>
						</Link>
					</div>
					<h1 className="title">{albumTitle}</h1>
				</div>
			</div>
			<div className="articleContent">
				<div className="body">
					<RichText {...body.json} />
				</div>
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

export default ReviewTemplate;