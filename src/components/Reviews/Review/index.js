import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Container = styled.div`
	flex-basis: calc(33.3333% - 30px);
  padding: 0 15px;
`;

const ImgWrapper = styled.div`
	height: 275px;
	width: 275px;
`;

const Details = styled.div`
	padding: 0 15px;
  color: white;
`;

const Review = props => {
	const { albumTitle, slug, artist, publishedDate, albumCover } = props;

	return (
		<Container>
			<Link to={`/reviews/${slug}`}>
				<ImgWrapper>
					<Img
						fluid={albumCover.fluid}
						key={albumCover.fluid.src}
						alt={albumCover.title}>
					</Img>
				</ImgWrapper>
				<Details>
					<h3>{artist[0].englishName}</h3>
					<h4>{albumTitle}</h4>
					<p>{publishedDate}</p>
				</Details>
			</Link>
		</Container>
	);
};

export default Review;
