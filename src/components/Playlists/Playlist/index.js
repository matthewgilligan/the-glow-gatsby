import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Playlist = props => {
    const { title, subtitle, slug, author, publishedDate, 
        category, genre, coverImage } = props;

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
                <div className="credit">
                    <p className="author">{author[0].englishName}</p>
                </div>
                <h2 className="title">
                    {title}
                </h2>
            </div>
        </div>
    )
};

export default Playlist;
