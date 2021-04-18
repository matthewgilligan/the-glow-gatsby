import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Feature = ({ node }) => {
    const { title, author, artist, publishedDate } = node;

    console.log(node);

    return (
        <div className="feature">
            {/* <div className="imageWrapper">
                <Link to={`./${slug}`}>
                    <Img
                        fluid={coverImage.fluid}
                        key={coverImage.fluid.src}
                        alt={coverImage.title}
                        className="image">
                    </Img>
                </Link>
            </div> */}
            <div className="details">
                <div className="credit">
                    <p className="type">Feature <span>|</span></p>
                    {/* <p className="author">{author[0].englishName}</p> */}
                </div>
                <h2 className="title">
                    {title}
                </h2>
            </div>
        </div>
    )
};

export default Feature;
