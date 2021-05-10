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
	padding: 0 40px;
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
