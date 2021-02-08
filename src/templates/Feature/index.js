import React from 'react';
import { graphql, Link } from 'gatsby';
import Img from 'gatsby-image';

import './styles.scss';
import MainLayout from '../../layouts/MainLayout';
import RichText from './../../components/RichText';

const FeatureTemplate = (props) => {
    const { title, coverImage, publishedDate, author, body } = props.data.contentfulFeature;

    return (
        <MainLayout>
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
                <div className="articleContent">
                    <div className="body">
                        <RichText {...body.json} />
                    </div>
                </div>
            </div>
        </MainLayout>
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
            body {
                json
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