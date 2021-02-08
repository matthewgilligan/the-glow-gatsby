import React from 'react';

import MainLayout from './../layouts/MainLayout';
import Hero from './../components/Hero';
import ReviewsPreview from '../components/ReviewsPreview';

const Home = (props) => {
	const { latestInterview, reviews } = props.data;

	const configLatestInterview = {
		...latestInterview
    }
    
    const configReviews = {
		...reviews
	}

	return (
		<MainLayout>
			<Hero {...configLatestInterview} />
            <ReviewsPreview {...reviews} />
		</MainLayout>
	)
};

export const query = graphql`
    query {
        latestInterview : allContentfulFeature ( sort: { fields:publishedDate, order:DESC }, filter: { category:{ name: { eq: "Interviews" } } }, limit: 1 ) {
            edges {
                node {
                    slug
                    title
                    publishedDate(formatString:"MMMM Do YYYY")
                    subtitle {
                        json
                    }
                    category {
                        name
                    }
                    coverImage {
                        title
                        file {
                            url
                        }
                        fluid {
                            ...GatsbyContentfulFluid
                        }
                    }
                    artist {
                        englishName
                    }
                    author {
                        englishName
                        slug
                    }
                }
            }
        }
        reviews : allContentfulReview ( sort: { fields:publishedDate, order:DESC } limit: 12 ) {
            edges {
                node {
                    albumTitle
                    slug
                    artist {
                        englishName
                    }
                    albumCover {
                        title
                        fluid {
                            ...GatsbyContentfulFluid
                        }
                        }
                    publishedDate (formatString:"MMMM Do YYYY")
                }
            }
        }
    }
`

export default Home;