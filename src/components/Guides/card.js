import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';
import Img from 'gatsby-image';

const Container = styled.div`
	position: relative;
	height: 100vh;
	width: 575px;
	background-color: red;
	h1{
		color: black;
	}
`;

const InnerCard = styled.div`
	position: absolute;
	bottom: 0;
	left: 50%;
	-webkit-transform: translateX(-50%);
	transform: translateX(-50%);
	height: 400px;
	width: 375px;
	padding: 10px 30px;
	box-sizing: border-box;
	background-color: transparent;
	transition: background-color 1s ease 0s;
	backdrop-filter: blur(15px);
	border-radius: 50px 50px 0 0;
	color: white;
	font-family: "Lexend Tera";
	p {
		text-transform: lowercase;
	}
	h1 {
		color: white;
		font-family: "Lexend Tera";
	}
`;

const imgStyle = {
	height: "100vh",
}

const Guide = ({ node }) => {
	const { subject, slug, genre, publishedDate, coverImage } = node;

	return (
		<Link to={`/guides/${slug}`}>
			<Container>
				<Img
						fluid={coverImage.fluid}
						key={coverImage.fluid.src}
						alt={coverImage.title}
						style={imgStyle}>
				</Img>
				<InnerCard>
					<p>{genre.name}</p>
					<h1>A Brief Guide to {subject}</h1>
				</InnerCard>
			</Container>
		</Link>
	)
};

export default Guide;