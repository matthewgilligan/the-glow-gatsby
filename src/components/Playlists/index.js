import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import './styles.scss';
import Playlist from './Playlist';

const Playlists = (props) => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulFeature ( sort: { fields:publishedDate, order:DESC }, filter: { subcategory:{ name: { eq: "The Playlist" } } } ) {
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
                        publishedDate
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

    const playlists = data.allContentfulFeature.edges;
    
    if (!Array.isArray(playlists)) return null;

    if (playlists.length < 1) {
        return (
            <div className="products">
                <p>
                    Content is on the way - stay tuned!
                </p>
            </div>
        );
    };

    return (
        <div className="playlists">
            {playlists.map((edge, pos) => {
                const configPlaylist = {
                    ...edge.node
                };

                return (
                    <Playlist key={pos} {...configPlaylist} />
                )
            })};
        </div>
    )
};

export default Playlists;
