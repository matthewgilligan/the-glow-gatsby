import React from 'react';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';

import MainLayout from './../../layouts/MainLayout';

const Feature = (props) => {
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

export default Feature;