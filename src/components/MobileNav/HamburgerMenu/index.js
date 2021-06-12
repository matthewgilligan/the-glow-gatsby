import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useLocation } from '@reach/router';

import MenuToggle from './menuToggle.js';
import { NavMenu } from './navMenu';

const HamburgerMenuContainer = styled.div`
  display: flex;
`;

const MenuContainer = styled(motion.div)`
  width: calc(100vw + 5em);
  max-width: calc(100vw + 5em);
  height: 100%;
  background-color: black;
  z-index: 90;
  position: fixed;
  top: 0;
  left: 0;
  user-select: none;
  padding: 1em 2.5em;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 1em;
`;

const menuVariants = {
  open: {
    transform: 'translateX(-3%)',
  },
  closed: {
    transform: 'translateX(-103%)',
  },
};

const menuTransition = {
  type: 'spring',
  duration: 1,
  stiffness: 33,
  delay: 0.1,
};

// const commonVariants = {
// 	show: {
// 		transform: "translateX(0em)",
// 		opacity: 1,
// 		transition: {
// 		delay: 0.3,
// 		duration: 0.01,
// 		},
// 	},
// 	hide: {
// 		transform: "translateX(5em)",
// 		opacity: 0,
// 	},
// };

// const commonTransition = { type: "spring", duration: 0.05 };

const HamburgerMenu = (props) => {
  const location = useLocation();
  const [activeMenu, setActiveMenu] = useState(false);

  useEffect(() => {
    setActiveMenu(false);
  }, [location]);

  const [isOpen, setOpen] = useState(false);

  const toggleMenu = () => {
    setOpen(!isOpen);
  };

  return (
    <HamburgerMenuContainer>
      <MenuToggle toggle={toggleMenu} isOpen={isOpen} />
      <MenuContainer
        initial={false}
        animate={isOpen ? 'open' : 'closed'}
        variants={menuVariants}
        transition={menuTransition}
      >
        <ContentContainer>
          <NavMenu isOpen={isOpen} />
        </ContentContainer>
      </MenuContainer>
    </HamburgerMenuContainer>
  );
};

export default HamburgerMenu;
