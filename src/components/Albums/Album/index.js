import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Album = props => {
    const { albumTitle, slug, artist, initialReleaseDate, 
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
                <h2 className="title">{albumTitle}</h2>
                <h3 className="artist">{artist[0].englishName}</h3>
                <p className="date">{initialReleaseDate}</p>
                <p className="genre">{genre.name}</p>
            </div>
        </div>
    )
};

export default Album;
