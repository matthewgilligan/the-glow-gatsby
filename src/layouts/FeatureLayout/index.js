import React from 'react';
import styled from 'styled-components';

import './../../styles/index.scss';
// import Footer from './../../components/Footer';
import Navigation from './../../components/Navigation';

const Container = styled.div`
	display: flex;
	flex-direction: column;
	min-height: 100vh;
`;

const FeatureLayout = (props) => {
	return (
		<Container>
			<Navigation />
			{props.children}
		</Container>
	);
};

export default FeatureLayout;
