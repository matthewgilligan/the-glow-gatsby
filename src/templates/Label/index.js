import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from './../layouts/MainLayout';
import { OriginalScheme } from './../helpers/navColors';

const LabelTemplate = ({ data }) => {
  const { englishName } = data.strapiLabels;

  return (
    <MainLayout navColor={OriginalScheme}>
      <h1>{englishName}</h1>
    </MainLayout>
  )
};

export const query = graphql`
  query($slug: String!){
    strapiLabels (slug: { eq: $slug }) {
      englishName
    }
  }
`;

export default LabelTemplate;