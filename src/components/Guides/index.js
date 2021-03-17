import React from 'react';
import styled from 'styled-components';
import HorizontalScroll from 'react-scroll-horizontal'

import Guide from './card.js';

const Guides = (props) => {
	const guides = props.edges;

	const guideArray = guides.map((guide, pos) => {
		return (
				<Guide {...guide} key={pos} />
		)
	});

	return (
		<HorizontalScroll style={{width: "100vw", height:"100vh"}} reverseScroll = {true}>
			{guideArray}
		</HorizontalScroll>
		
	);
};

export default Guides;