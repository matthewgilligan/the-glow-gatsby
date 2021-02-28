import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Playlist = props => {
    const { title, slug, publishedDate, artist, coverImage } = props;

    return (
        <div className="playlist">
            <div className="imageWrapper">
                <Link to={`./${slug}`}>
                    <Img
                        fluid={coverImage.fluid}
                        key={coverImage.fluid.src}
                        alt={coverImage.title}
                        className="image">
                    </Img>
                </Link>
            </div>
            <div className="details">
                <h2 className="artist">{artist[0].englishName}</h2>
            </div>
        </div>
    )
};

export default Playlist;
