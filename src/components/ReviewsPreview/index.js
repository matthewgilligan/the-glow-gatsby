import React from 'react';
import styled from 'styled-components';

import Review from './../Reviews/Review';

const Container = styled.div`
	height: 100vh;
  width: 100%;
  background-color: rgb(98, 56, 128);
`;

const Wrap = styled.div`
	width: calc(100vw - 95px);
  float: right;
`;

const Reviews = styled.div`
	display: flex;
	flex-wrap: wrap;
	width: 100%;
	padding: 0px;
	margin: 0 auto;
	box-sizing: border-box;
`;

const ReviewsPreview = (props) => {
	const { edges } = props;
	
	return (
		<Container>
			<Wrap>
				<Reviews>
					{edges.map((edge, pos) => {
						const configReview = {
							...edge.node
						};

						return (
							<Review key={pos} {...configReview} />
						)
					})}
				</Reviews>
			</Wrap>
		</Container>
	)
};

export default ReviewsPreview;
