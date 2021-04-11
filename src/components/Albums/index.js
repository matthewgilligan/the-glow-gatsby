import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import './styles.scss';
import Album from './Album';

const Albums = () => {
    const data = useStaticQuery(graphql`
        query {
            allStrapiAlbums {
                edges {
                    node {
                        title
                        artists {
                            englishName
                        }
                        genre {
                            name
                        }
                        cover {
                            url
                        }
                    }
                }
            }
        }
    `);

    const albums = data.allStrapiAlbums.edges;

    if (!Array.isArray(albums)) return null;

    if (albums.length < 1) {
        return (
            <div className="products">
                <p>
                    Content is on the way - stay tuned!
                </p>
            </div>
        );
    };

    return (
        <div className="albums">
            {albums.map((edge, pos) => {
                const configAlbum = {
                    ...edge.node
                };

                return (
                    <Album key={pos} {...configAlbum} />
                )
            })}
        </div>
    )
};

export default Albums;
