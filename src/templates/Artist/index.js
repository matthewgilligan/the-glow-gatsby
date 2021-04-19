import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from './../../layouts/MainLayout';

const GuideTemplate = (props) => {
    const { englishName } = props.data.strapiArtists;

    return (
        <MainLayout>
            <h1>{englishName}</h1>
        </MainLayout>
    )
};

export const query = graphql`
    query($slug: String!){
        strapiArtists (slug: { eq: $slug }) {
            englishName
        }
    }
`

export default GuideTemplate;