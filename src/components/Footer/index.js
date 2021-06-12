import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';
import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaSpotify,
  FaApple,
} from 'react-icons/fa';

import Logo from 'assets/white-glow.png';

const Container = styled.div`
  padding-top: 2rem;
  background-color: black;
  color: rgb(153, 153, 153);
`;

const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1280px;
  padding: 0 1rem;
`;

const InnerWrap = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 2rem;
  a {
    color: rgb(153, 153, 153);
    &:hover {
      color: white;
    }
  }
`;

const Copyright = styled.div`
  margin-top: 4px;
  font-size: 1rem;
  img {
    height: 70px;
    margin-bottom: 0.5rem;
    &:hover {
      filter: brightness(0) invert(1) !important;
    }
  }
`;

const Pages = styled.div`
  position: relative;
  width: 15%;
  font-size: 1.5rem;
  text-transform: uppercase;
  ul {
    position: absolute;
    bottom: 0;
    padding-left: 0;
    list-style-type: none;
    li {
      margin-top: 8px;
    }
  }
`;

const Socials = styled.div`
  margin-top: 84px;
  padding: 0;
  ul {
    display: flex;
    list-style-type: none;
    li {
      margin-right: 1.2rem;
      color: rgb(153, 153, 153);
      font-size: 1.5rem;
      text-decoration: none;
      &:last-child {
        margin-right: 0;
      }
    }
  }
`;

const Footer = () => {
  return (
    <Container>
      <Wrap>
        <InnerWrap>
          <Copyright>
            <Link to='/'>
              <img src={Logo} alt='The Glow Logo' />
            </Link>
            <p>© 2020 The Glow JP Ltd.</p>
            <p>
              All rights reserved.{' '}
              <Link to='/privacy-policy' className='copyrightLinks'>
                Privacy Policy
              </Link>
            </p>
          </Copyright>
          <Pages>
            <ul>
              <li>
                <Link to='/news'>News</Link>
              </li>
              <li>
                <Link to='/reviews'>Reviews</Link>
              </li>
              <li>
                <Link to='/features'>Features</Link>
              </li>
              <li>
                <Link to='/guides'>Guides</Link>
              </li>
            </ul>
          </Pages>
          <Pages>
            <ul>
              <li>
                <Link to='/about'>About Us</Link>
              </li>
              <li>
                <Link to='/ad'>Advertise</Link>
              </li>
              <li>
                <a
                  href='https://www.patreon.com/theglowjp'
                  target='_blank'
                  rel='noreferrer'
                >
                  Support Us
                </a>
              </li>
            </ul>
          </Pages>
          <Socials>
            <ul>
              <li>
                <a
                  href='https://www.instagram.com/theglow.jp/'
                  target='_blank'
                  rel='noreferrer'
                  role='button'
                  aria-label='Mute volume'
                >
                  <FaInstagram />
                </a>
              </li>
              <li>
                <a
                  href='https://www.facebook.com/theglow.jp'
                  target='_blank'
                  rel='noreferrer'
                  role='button'
                  aria-label='Mute volume'
                >
                  <FaFacebookF />
                </a>
              </li>
              <li>
                <a
                  href='https://twitter.com/theglow_jp/'
                  target='_blank'
                  rel='noreferrer'
                  role='button'
                  aria-label='Mute volume'
                >
                  <FaTwitter />
                </a>
              </li>
              <li>
                <a
                  className='socialMobileItem'
                  href='https://open.spotify.com/user/ji21784pk94jfyv4u9w01xkhe?si=ZOykmTClStyjbTpG9XmPGg'
                  target='_blank'
                  rel='noreferrer'
                  role='button'
                  aria-label='Mute volume'
                >
                  <FaSpotify />
                </a>
              </li>
              <li>
                <a
                  className='socialMobileItem'
                  href='https://itunes.apple.com/profile/theglow_jp'
                  target='_blank'
                  rel='noreferrer'
                  role='button'
                  aria-label='Mute volume'
                >
                  <FaApple />
                </a>
              </li>
            </ul>
          </Socials>
        </InnerWrap>
      </Wrap>
    </Container>
  );
};

export default Footer;
