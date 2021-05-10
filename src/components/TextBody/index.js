import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';
import rehypeRaw from 'rehype-raw'

const Container = styled.div`
  z-index: 1000;
  width: 600px;
  img {
    width: 100%;
  }
  iframe {
    width: 100%;
  }
`;

const TextBody = ({content}) => {
  console.log(content);
  return (
    <Container>
      <ReactMarkdown 
        children={content}
        linkTarget="_blank"
        rehypePlugins={[rehypeRaw]}
        transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`}
      />
    </Container>
  )
};

export default TextBody;
