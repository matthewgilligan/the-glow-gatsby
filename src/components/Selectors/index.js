import React from 'react';
import styled from "styled-components";

import LatestSelector from './latest.js';
import SelectorCard from './card.js';

const Container = styled.div`
  width: 100%;
  padding: 0px;
  box-sizing: border-box;
`;

const PageTitle = styled.div`
  color: white;
  text-align: center;
  margin-bottom: 100px;
  h1 {
		font-size: 12rem;
    font-weight: normal;
		text-transform: uppercase;
    font-family: 'Lexend Tera';
    margin-bottom: 30px;
	}
  p {
    width: 500px;
    margin: 0 auto;
  }
`;

const Selectors = (props) => {
  const { edges } = props.allStrapiFeatures;
  const latest= edges.shift();
  
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
      <PageTitle>
        <h1>Selector</h1>
        <p>Your favourite artists select some of the tracks that helped shape their career.</p>
      </PageTitle>
      <LatestSelector {...latest} />
      {edges.map((edge, pos) => {
        return (
          <SelectorCard key={pos} {...edge} />
        )
      })}
    </Container>
  )
};

export default Selectors;
