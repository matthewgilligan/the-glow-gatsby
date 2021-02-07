import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from './../../layouts/MainLayout';

const FeatureTemplate = (props) => {
    const { title } = props.data.contentfulFeature;

    return (
        <MainLayout>
            <h1>{title}</h1>
        </MainLayout>
    )
};

export const query = graphql`
    query($slug: String!){
        contentfulFeature (slug: { eq: $slug }) {
            title
        }
    }
`

export default FeatureTemplate;