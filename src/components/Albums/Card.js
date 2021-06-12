import React from 'react';
import { Link } from 'gatsby';

import { Container, ImgWrap, Details } from './styled';

const AlbumCard = (props) => {
  const { englishTitle, artists, cover, slug, releaseDate } = props;

  return (
    <Container>
      <Link to={`/album/${slug}`}>
        <ImgWrap>
          <img
            src={`http://localhost:1337${cover[0].url}`}
            alt=''
            className='image'
          />
        </ImgWrap>
      </Link>

      <Details>
        <h3>{artists[0].englishName}</h3>
        <h3>{englishTitle}</h3>
        <p>{releaseDate}</p>
      </Details>
    </Container>
  );
};

export default AlbumCard;
