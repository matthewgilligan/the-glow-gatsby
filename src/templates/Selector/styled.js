import styled from 'styled-components';

export const Container = styled.div`
  position: relative;
  height: 100%;
`;

export const Banner = styled.div`
  position: relative;
  background-color: black;
  height: 63vh;
  color: white;
  text-align: center;
  margin-bottom: 280px;
`;

export const BannerTextWrap = styled.div`
  position: relative;
  width: 50%;
  margin: 0 auto;
  padding-top: 80px;

  h1 {
    font-size: 50px;
    margin-bottom: 10px;
  }
  p {
    font-family: 'Lexend Tera';
    font-size: 16px;
    text-transform: uppercase;
  }
`;

export const BannerImg = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  transform: translateY(200px);
`;

export const BannerImgWrap = styled.div`
  position: relative;
  height: 400px;
  width: 100%;
  h2 {
    margin: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 100%;
    font-family: 'Lexend Tera';
    margin: 0;
    padding: 0;
    font-size: 160px;
    text-transform: uppercase;
    color: transparent;
    -webkit-text-stroke: 1px gray;
  }
  img {
    position: absolute;
    top: 50%;
    left: 50%;
    -ms-transform: translate(-50%, -50%);
    transform: translate(-50%, -50%);
    width: 400px;
    height: 400px;
    object-fit: cover;
    border-radius: 50%;
    z-index: 100;
  }
`;
