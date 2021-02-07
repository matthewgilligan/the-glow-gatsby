import React from 'react';

import HomeLayout from './../layouts/HomeLayout';
import Hero from './../components/Hero';

const Home = (props) => {
	const { latestInterview } = props.data;

	const configLatestInterview = {
		...latestInterview
	}

	return (
		<HomeLayout>
			<Hero {...configLatestInterview} />
		</HomeLayout>
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
    }
`

export default Home;