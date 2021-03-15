import React from 'react';
import styled from 'styled-components';

import './../../styles/index.scss';
import Footer from './../../components/Footer';
import Header from './../../components/Header';
import Navigation from './../../components/Navigation';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const HomeLayout = (props) => {
	return (
		<Container>
			<Navigation />
			{props.children}
			<Footer />
		</Container>
	);
};

export default HomeLayout;
