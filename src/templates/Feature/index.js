import React from 'react';
import { graphql } from 'gatsby';

import FeatureLayout from 'layouts/FeatureLayout';
import TextBody from 'components/TextBody';
// import { formatAuthor } from 'helpers/formatLists';

import { Container, Banner, Title, Body } from './styled';

const FeatureTemplate = (props) => {
  const { title, body, subtitle, coverImage, publishedDate, artists } =
    props.data.strapiFeatures;

  // const author = formatAuthor(authors);

  return (
    <FeatureLayout>
      <Container>
        <Banner
          style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0),rgba(0,0,0,0.8)), url(${
              process.env.IMAGE_BASE_URL + coverImage.url
            })`,
          }}
        >
          <Title>
            <h1>{title}</h1>
            <p>{publishedDate}</p>
          </Title>
        </Banner>
        <Body>
          <TextBody body={body} subtitle={subtitle} artists={artists} />
        </Body>
      </Container>
    </FeatureLayout>
  );
};

export const query = graphql`
  query ($slug: String!) {
    strapiFeatures(slug: { eq: $slug }) {
      title
      subtitle
      body
      publishedDate(formatString: "MMMM D YYYY")
      authors {
        englishName
      }
      artists {
        englishName
        slug
      }
      coverImage {
        url
      }
    }
  }
`;

export default FeatureTemplate;
