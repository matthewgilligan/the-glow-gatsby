import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

const Feature = ({ node }) => {
    const { title, category, publishedDate, authors } = node;

    let author = "";
    if (authors.length > 1) {
      author = `${authors[0].englishName} & ${authors[1].englishName}`
    } else if (authors.length > 0) {
      author = authors[0].englishName
    } else {
      author = "The Glow"
    };

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
                    <p className="type"><strong>{category.name}</strong> <span>|</span>By {author}</p>
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
