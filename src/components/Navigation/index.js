import React from 'react';
import { Link, graphql, useStaticQuery } from 'gatsby';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

import Logo from './../../images/the-glow-sun-S-Standard.svg';

const Container = styled.div`
	position: fixed;
	top: 0px;
	left: 0px;
	width: 60px;
	height: 100%;
	z-index: 999;
	box-sizing: border-box;
	border-right: 1px solid white;
	background-color: transparent;
	transition: background-color 1s ease 0s;
	backdrop-filter: blur(30px);
	padding: 20px 40px;
	display: flex;
	flex-direction: column;
	-webkit-box-pack: justify;
	justify-content: space-between;
	-webkit-box-align: center;
	align-items: center;
`;

const Search = styled.div`
	color: white;
`;

const Navigation = ({ colorScheme }) => {
  const { hamburger, logo, border } = colorScheme;

	const data = useStaticQuery(graphql`
		query {
			site {
				siteMetadata {
					siteTitle
					twitterUsername
					facebookUsername
					instagramUsername
				}
			}
		}
	`)

	const { siteTitle, twitterUsername, facebookUsername, 
		instagramUsername } = data.site.siteMetadata;

	return (
		<Container style={{borderRight: border}}>
			<Search>
				<FiSearch role="button" href="#" style={{ width: '45px', color: hamburger }}/>
			</Search>
			<Link to="/" >
				<img src={Logo} alt="Logo" style={{ width: '45px', fill: logo }}/>
			</Link>
		</Container>
	)
};

export default Navigation;
