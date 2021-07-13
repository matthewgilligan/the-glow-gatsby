import styled from 'styled-components';

export const NavBarImg = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 80px;
  height: 100vh;
  img {
    object-fit: cover;
    width: 80px;
    height: 100vh;
  }
`;

export const Banner = styled.div`
  position: relative;
  width: 100%;
  height: 350px;
  margin-bottom: 150px;
  background-color: pink;
`;

export const BannerWrap = styled.div`
  position: absolute;
  display: flex;
  width: 100%;
  padding: 0 100px;
  justify-content: space-between;
  bottom: 0;
  transform: translateY(150px);
`;

export const TextWrap = styled.div`
  max-width: 700px;
  width: 60%;
  h1 {
    margin: 0;
  }
  h2 {
    font-size: 18px;
    margin: 0 0 10px;
  }
`;

export const ImgWrap = styled.div`
  width: 400px;
  height: 400px;
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Body = styled.div`
  width: 60%;
  max-width: 700px;
  padding: 0 100px;
  transform: translateY(-125px);
`;

export const Details = styled.div`
  margin: 60px 100px 0 0;
  width: 400px;
  h3 {
    font-family: 'Lexend Tera';
    text-transform: uppercase;
    font-size: 18px;
    margin: 0 0 10px;
  }
`;

export const Info = styled.div`
  display: flex;
`;

export const Keys = styled.div`
  width: 120px;
  font-weight: bolder;
`;

export const Values = styled.div`
  a {
    text-decoration: underline;
    text-decoration-color: #e7334d;
  }
`;
