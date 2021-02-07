import React from 'react';
import { Link } from 'gatsby';
import Img from 'gatsby-image';

import './styles.scss';

const Hero = (props) => {
    const { slug, title, publishedDate, subtitle, 
        category, coverImage, artist, author } = props.edges[0].node;

    return (
        <section className="hero">
            <Link to={`/features/${slug}`}>
                <Img
                    fluid={coverImage.fluid}
                    key={coverImage.fluid.src}
                    alt={coverImage.title}
                    className="image">
                </Img>
            </Link>
        </section>
    )
};

export default Hero;
