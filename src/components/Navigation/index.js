import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import { FiSearch } from 'react-icons/fi';

import Logo from './../../images/the-glow-sun-S-Standard.svg';
import { LightScheme } from './../../helpers/navColors.js';

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
  h1 {
    transform: rotate(-90deg);
    -webkit-transform: rotate(-90deg);
    -moz-transform: rotate(-90deg);
    -ms-transform: rotate(-90deg);
    -o-transform: rotate(-90deg);
    color: white;
    width: 200px;
    font-family: 'Lexend Tera';
    text-transform: uppercase;
    font-size: 20px;
    font-weight:normal;
  }
`;

const Search = styled.div`
	color: white;
`;

const Navigation = ({ colorScheme }) => {
  console.log(colorScheme);
  const hamburger = (colorScheme != undefined) ? colorScheme.hamburger : LightScheme.hamburger;
  const logo = (colorScheme != undefined) ? colorScheme.logo : LightScheme.logo;
  const border = (colorScheme != undefined) ? colorScheme.border : LightScheme.border;

	return (
		<Container style={{ borderRight: border }}>
			<Search>
				<FiSearch role="button" href="#" style={{ width: '45px', color: hamburger }}/>
			</Search>
      <h1 style={{ color: hamburger }}>The Glow</h1>
			<Link to="/" >
				<img src={Logo} alt="Logo" style={{ width: '45px', filter: logo }}/>
			</Link>
		</Container>
	)
};

export default Navigation;
