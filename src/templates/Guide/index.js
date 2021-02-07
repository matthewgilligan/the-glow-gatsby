import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from './../../layouts/MainLayout';

const GuideTemplate = (props) => {
    const { title } = props.data.contentfulGuide;

    return (
        <MainLayout>
            <h1>{title}</h1>
        </MainLayout>
    )
};

export const query = graphql`
    query($slug: String!){
        contentfulGuide (slug: { eq: $slug }) {
            title
        }
    }
`

export default GuideTemplate;