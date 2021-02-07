import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import Feature from './Feature';

const Features = (props) => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulFeature(sort: { fields: publishedDate, order: DESC }) {
                edges {
                    node {
                        title
                        subtitle {
                            json
                        }
                        slug
                        author {
                            englishName
                            slug
                        }
                        publishedDate(formatString: "MMMM Do YYYY")
                        category {
                            name
                        }
                        genre {
                            name
                        }
                        coverImage {
                            file {
                                url
                            }
                            title
                            fluid {
                                ...GatsbyContentfulFluid
                            }
                        }
                    }
                }
            }
        }
    `)

    const features = data.allContentfulFeature.edges;
    
    if (!Array.isArray(features)) return null;
    
    if (features.length < 1) {
        return (
            <div className="products">
                <p>
                    Content is on the way - stay tuned!
                </p>
            </div>
        );
    };

    return (
        <div>
            <div className="features">
                {features.map((edge, pos) => {
                    const configFeature = {
                        ...edge.node
                    };

                    return (
                        <Feature key={pos} {...configFeature} />
                    )
                })};
            </div>
        </div>
    )
};

export default Features;
