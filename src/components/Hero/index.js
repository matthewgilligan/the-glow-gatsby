import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

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
				<img src={process.env.IMAGE_BASE_URL + coverImage.url} alt=""/>
			</Link>
		</Container>
	)
};

export default Hero;
