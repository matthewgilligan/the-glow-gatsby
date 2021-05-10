import React from 'react';
import styled from 'styled-components';

import './../../styles/index.scss';
import Footer from './../../components/Footer';
import Header from './../../components/Header';
import Navigation from './../../components/Navigation';

const Container = styled.div`
  position: relative;
  display: block;
  width: 100%;
  min-height: 100%;
  overflow: hidden;
`;

const Content = styled.div`
	width: calc(100vw - 80px);
	float: right;
	padding: 40px 0;
`;

const PageTitle = styled.div`
	h1 {
		font-family: Arial;
		font-size: 15rem;
		text-transform: uppercase;
	}
`;

const IndexLayout = ({ children, title, navColor, backgroundColor }) => {
	return (
		<Container style={{ backgroundColor: backgroundColor }}>
			<Navigation colorScheme={navColor} />
			<Content>
				<Header />
				<PageTitle>
					<h1>{title}</h1>
				</PageTitle>
				{children}
			</Content>
		</Container>
	);
};

export default IndexLayout;
