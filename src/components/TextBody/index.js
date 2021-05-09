import React from 'react';
import styled from 'styled-components';
import ReactMarkdown from 'react-markdown';

const Container = styled.div`
  z-index: 1000;
`;

const RichText = ({content}) => {
  console.log(content);
  return (
    <Container>
      <ReactMarkdown 
        children={content}
        linkTarget="_blank"
        transformImageUri={uri => uri.startsWith('http') ? uri : `${process.env.IMAGE_BASE_URL}${uri}`}
      />
    </Container>
  )
};

export default RichText;
