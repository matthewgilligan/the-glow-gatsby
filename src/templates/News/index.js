import React from 'react';
import { graphql } from 'gatsby';

const NewsTemplate = (props) => {
    const { title } = props.data.contentfulNews;

    return (
        <div>
            <h1>{title}</h1>
        </div>
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