import React from 'react';
import styled from 'styled-components';

import './../../styles/index.scss';
import Footer from './../../components/Footer';
import Header from './../../components/Header';
import Navigation from './../../components/Navigation';

const Container = styled.div`
	width: calc(100vw - 95px);
	float: right;
`;

const Content = styled.div`
	/* max-width: 1050px; */
	padding-left: 40px;
`;

const PageTitle = styled.div`
	h1 {
		font-family: Arial;
		font-size: 15rem;
		text-transform: uppercase;
	}
`;

const IndexLayout = (props) => {
	const {title} = props;

	return (
		<Container>
			<Navigation />
			<Content>
				<Header />
				<PageTitle>
					<h1>{title}</h1>
				</PageTitle>
				{props.children}
			</Content>
		</Container>
	);
};

export default IndexLayout;
