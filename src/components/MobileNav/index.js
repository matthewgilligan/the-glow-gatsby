import React from 'react';
import { Link } from 'gatsby';
import styled from 'styled-components';

import HamburgerMenu from './HamburgerMenu';

const NavbarContainer = styled.div`
  width: 100%;
  height: 55px;
  display: flex;
  position: fixed;
  top: 0;
  flex-direction: row-reverse;
  align-items: center;
  padding: 0 1.5em;
  z-index: 1000;
  display: none;
  @media (max-width: 600px) {
    display: block;
  }
`;

const NavbarLogo = styled.div`
	width: 13rem;
	position: absolute;
	top: 50%;
	left: 0;
	margin-left: 4px;
	-webkit-transform: translateY(-50%);
	-moz-transform: translateY(-50%);
	transform: translateY(-50%);
	img {
		display: block;
		width: 100%;
		margin: 0;
	}
`;

const MobileNav = () => {
  return (
    <NavbarContainer>
      <NavbarLogo>
      </NavbarLogo>
      <HamburgerMenu />	
    </NavbarContainer>
  );
};

export default MobileNav;