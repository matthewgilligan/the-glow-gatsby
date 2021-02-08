import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import './styles.scss';

const Review = props => {
    const { albumTitle, slug, artist, publishedDate, 
        albumCover } = props;

    return (
        <div className="review">
            <Link to={`/reviews/${slug}`}>
                <div className="imageWrapper">
                    <Img
                        fluid={albumCover.fluid}
                        key={albumCover.fluid.src}
                        alt={albumCover.title}
                        className="image">
                    </Img>
                </div>
                <div className="details">
                    <h3 className="author">{artist[0].englishName}</h3>
                    <h4 className="title">
                        {albumTitle}
                    </h4>
                    <p className="date">{publishedDate}</p>
                </div>
            </Link>
        </div>
    )
};

export default Review;
