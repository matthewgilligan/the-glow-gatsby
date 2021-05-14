import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'

const Container = styled.div`
  z-index: 1000;
`;

const Subtitle = styled.div`
  width: 775px;
  margin: 0 auto 50px;
  p {
    font-weight: bolder;
    font-size: 18px;
    font-weight: 600;
  }
`;

const Body = styled.div`
  width: 600px;
  margin: 0 auto;
  h4 {
    transform: translateY(50px);
  }
  img {
    width: 100%;
  }
  iframe {
    width: 100%;
    margin-bottom: 20px;
  }
`;

const TextBody = ({ body, subtitle }) => {
  return (
    <Container>
      <Subtitle>
        <ReactMarkdown 
          children={subtitle}
          linkTarget="_blank"
          rehypePlugins={[rehypeRaw]}
          transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`}
        />
      </Subtitle>
      <Body>
        <ReactMarkdown 
          children={body}
          linkTarget="_blank"
          rehypePlugins={[rehypeRaw]}
          transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`}
        />
      </Body>
    </Container>
  )
};

export default TextBody;
