import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import './styles.scss';

const Review = props => {
    const { albumTitle, slug, artist, publishedDate, 
        albumCover } = props;

    return (
        <div className="review">
            <div className="imageWrapper">
                <Link to={`/reviews/${slug}`}>
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
                    <p className="date">{publishedDate}</p>
                    <p className="author">{artist[0].englishName}</p>
                </div>
                <h2 className="title">
                    {albumTitle}
                </h2>
            </div>
        </div>
    )
};

export default Review;
