import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import Img from 'gatsby-image';

const Container = styled.div`
	height: 100vh;
	width: 100%;
	overflow: hidden;
	img {
		object-fit: cover !important;
	}
`;

const Hero = (props) => {
	const { slug, title, publishedDate, subtitle, category, 
		coverImage, artist, author } = props.edges[0].node;

	return (
		<Container>
			<Link to={`/interviews/${slug}`}>
				<Img
					fluid={coverImage.fluid}
					key={coverImage.fluid.src}
					alt={coverImage.title}>
				</Img>
			</Link>
		</Container>
	)
};

export default Hero;
