import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Album = props => {
    const { albumTitle, slug, artist, publishedDate, 
        genre, albumCover } = props;

    return (
        <div className="album">
            <div className="imageWrapper">
                <Link to={`./${slug}`}>
                    <Img
                        fluid={albumCover.fluid}
                        key={albumCover.fluid.src}
                        alt={albumCover.title}
                        className="image">
                    </Img>
                </Link>
            </div>
            <div className="details">
                <div className="credit">
                    <p className="type">Album <span>|</span></p>
                    <p className="author">{artist[0].englishName}</p>
                </div>
                <h2 className="title">
                    {albumTitle}
                </h2>
            </div>
        </div>
    )
};

export default Album;
