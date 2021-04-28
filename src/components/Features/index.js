import React from 'react';
import styled from 'styled-components';

import Feature from './card.js';

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 80%;
  padding: 0px;
  box-sizing: border-box;
`;

const Features = (props) => {
  const { edges } = props.allStrapiFeatures;
	if (!Array.isArray(edges)) return null;

	if (edges.length < 1) {
		return (
			<Container>
				<p>
					Content is on the way - stay tuned!
				</p>
			</Container>
		);
	};

	return (
		<Container>
			{edges.map((edge, pos) => {
				return (
					<Feature key={pos} {...edge} />
				)
			})}
		</Container>
	)
};

export default Features;
