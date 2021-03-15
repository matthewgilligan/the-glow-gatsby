import React from 'react';
import styled from 'styled-components';
 
import './../../styles/index.scss';
import Footer from './../../components/Footer';
import Header from './../../components/Header';
import Navigation from './../../components/Navigation';

const Container = styled.div`
	margin: 0 auto;
	max-width: 1280px;
	padding: 0 16px;
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const Content = styled.div`
	flex-grow: 1;
`;

const MainLayout = (props) => {
	return (
		<Container>
			<Navigation />
			<Content>
				{props.children}
			</Content>
		</Container>
	);
};

export default MainLayout;
