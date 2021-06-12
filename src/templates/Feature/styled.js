import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100%;
`;

export const Banner = styled.div`
  position: fixed;
  top: 0;
  height: 100vh;
  width: 100%;
  z-index: -1;
  background-size: cover;
  background-position: center;
  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
  }
`;

export const Title = styled.div`
  position: absolute;
  bottom: 0;
  width: 1000px;
  margin: 0 0 80px 180px;
  color: white;
  p {
    font-family: 'Lexend Tera';
    font-size: 16px;
    text-transform: uppercase;
  }
`;

export const Body = styled.div`
  width: calc(100vw - 81px);
  background-color: white;
  float: right;
  transform: translateY(100vh);
  div:first-of-type {
    margin-top: 100px;
  }
`;
