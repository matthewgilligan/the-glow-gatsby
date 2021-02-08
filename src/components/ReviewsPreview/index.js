import React from 'react';
import { Link } from 'gatsby';

import './styles.scss';
import Review from './../Reviews/Review';

const ReviewsPreview = (props) => {
    const { edges } = props;
    
    return (
        <section className="reviewsPreview">
            <div className="previewWrap">
                <div className="reviews">
                    {edges.map((edge, pos) => {
                        const configReview = {
                            ...edge.node
                        };

                        return (
                            <Review key={pos} {...configReview} />
                        )
                    })};
                </div>
            </div>
        </section>
    )
};

export default ReviewsPreview;
