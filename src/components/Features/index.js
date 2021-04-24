import React from 'react';

import './styles.scss';
import Feature from './card.js';

const Features = (props) => {
  const { edges } = props.allStrapiFeatures;
	if (!Array.isArray(edges)) return null;

	if (edges.length < 1) {
		return (
			<div className="products">
				<p>
					Content is on the way - stay tuned!
				</p>
			</div>
		);
	};

	return (
		<div className="features">
			{edges.map((edge, pos) => {
				return (
					<Feature key={pos} {...edge} />
				)
			})}
		</div>
	)
};

export default Features;
