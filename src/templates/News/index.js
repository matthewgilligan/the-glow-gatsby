import React from 'react';
import { graphql } from 'gatsby';

import MainLayout from '../../layouts/MainLayout';

const NewsTemplate = (props) => {
    const { title } = props.data.contentfulNews;

    return (
        <MainLayout>
            <h1>{title}</h1>
        </MainLayout>
    )
};

export const query = graphql`
    query($slug: String!){
        contentfulNews (slug: { eq: $slug }) {
            title
        }
    }
`

export default NewsTemplate;