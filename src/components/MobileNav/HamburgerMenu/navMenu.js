import React from 'react';
import styled from 'styled-components';
import { Link } from 'gatsby';
import { motion } from 'framer-motion';

const NavMenuContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavList = styled.ul`
  padding: 0 0.5em;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const NavLink = styled(motion.li)`
  font-family: 'Lexend Tera';
  font-weight: 600;
  text-transform: uppercase;
  height: 42px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin: 10px 0;
  a {
    text-decoration: none;
    color: white;
    font-size: 5rem;
    transition: all 200ms ease-in-out;
  }
`;

const variants = {
  show: {
    transform: 'translateX(10em)',
    opacity: 1,
  },
  hide: {
    transform: 'translateX(-5em)',
    opacity: 0,
  },
};

export function NavMenu({ isOpen }) {
  return (
    <NavMenuContainer>
      <NavList>
        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.4, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.1, duration: 0.05 },
            },
          }}
        >
          <Link to='/new-music'>New Music</Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.5, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.15, duration: 0.05 },
            },
          }}
        >
          <Link to='/explore'>Explore</Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.3, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.05, duration: 0.05 },
            },
          }}
        >
          <Link to='/selector'>Selector</Link>
        </NavLink>
        <NavLink
          initial={false}
          animate={isOpen ? 'show' : 'hide'}
          variants={{
            show: {
              ...variants.show,
              transition: { delay: 0.6, duration: 0.2 },
            },
            hide: {
              ...variants.hide,
              transition: { delay: 0.2, duration: 0.05 },
            },
          }}
        >
          <Link to='/features'>Features</Link>
        </NavLink>
      </NavList>
    </NavMenuContainer>
  );
}
