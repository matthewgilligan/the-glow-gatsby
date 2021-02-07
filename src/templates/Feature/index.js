import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import './styles.scss';

const FeatureTemplate = (props) => {
    const { title, coverImage, publishedDate, author } = props.data.contentfulFeature;

    return (
        <div className="featureTemplate">
            <div className="banner">
                <Img
                    fluid={coverImage.fluid}
                    key={coverImage.fluid.src}
                    alt={coverImage.title}
                    className="coverImage">
                </Img>
                <div className="details">
                    <div className="credit">
                        <p className="date">{publishedDate}</p>
                        <Link to="">
                            <p className="author">{author[0].englishName}</p>
                        </Link>
                    </div>
                    <h1 className="title">{title}</h1>
                </div>
            </div>
            <div className="content">
                <p>Hello</p>
            </div>
        </div>
    )
};

export const query = graphql`
    query($slug: String!){
        contentfulFeature (slug: { eq: $slug }) {
            title
            publishedDate(formatString:"MMMM D YYYY")
            author {
                englishName
            }
            coverImage {
                title
                fluid {
                  ...GatsbyContentfulFluid
                }
              }
        }
    }
`

export default FeatureTemplate;