import styled from 'styled-components';

export const AlbumsWrap = styled.div`
  display: flex;
  overflow-y: hidden;
  padding-top: 20px;
  &::-webkit-scrollbar {
    display: none;
  }
  &:first-child {
    padding-left: 0px;
  }
`;

export const Container = styled.div`
  width: 100%;
  min-height: 100px;
  transition: transform 450ms;
  padding: 0 15px;
  margin-bottom: 50px;
  &:hover {
    transform: scale(1.08);
  }
  &:first-of-type {
    padding-left: 0px;
  }
`;

export const ImgWrap = styled.div`
  img {
    height: 170px;
  }
`;

export const Details = styled.div`
  text-align: center;
  width: 170px;
  h3 {
    font-size: 16px;
    margin: 10px 0;
    &:first-of-type {
      margin-top: 15px;
    }
    &:last-of-type {
      font-weight: lighter;
      font-style: italic;
    }
  }
  p {
    font-size: 10px;
    font-weight: bolder;
    margin-top: 0.7rem;
    text-transform: uppercase;
    color: silver;
  }
`;
