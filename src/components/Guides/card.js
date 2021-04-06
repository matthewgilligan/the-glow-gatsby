import React from 'react';
import { Link } from 'gatsby'
import styled from 'styled-components';
import Img from 'gatsby-image';

const Container = styled.div`
	position: relative;
	height: 100vh;
	width: 575px;
	background-color: black;
`;

const ImageWrap = styled.div`
	opacity: 1;
	transform: none;

	img {
		position: absolute;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center center;
    opacity: 0;
	}
`;

const Details = styled.div`
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
	&:hover {
		transition: transform 3s ease;
		background-color: none;
		backdrop-filter: none;
	}
	p {
		background-color: none;
		backdrop-filter: none;
	}
	h1 {
		color: white;
		font-family: "Lexend Tera";
	}
`;

const imgStyle = {
	height: "100vh",
	overflow: "hidden"
}

const Guide = ({ node }) => {
	const { subject, slug, genre, publishedDate, coverImage } = node;

	return (
		<Container>
			<Link to={`/guides/${slug}`}>
				<ImageWrap>
					<Img
						fluid={coverImage.fluid}
						key={coverImage.fluid.src}
						alt={coverImage.title}
						style={imgStyle}>
					</Img>
				</ImageWrap>
				<Details>
					<p>{genre.name}</p>
					<h1>A Brief Guide to {subject}</h1>
				</Details>
			</Link>
		</Container>
	)
};

export default Guide;