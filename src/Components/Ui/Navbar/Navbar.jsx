import React from 'react';
import { Box, Image } from '@chakra-ui/react';
import Logo from '../../../Assets/logo1.png';
import NavContainer from './Components/NavContainer';
import { containerResponsive } from '../../../Utils/responsives';
import { Link } from 'react-router-dom';

import HamburgerBtn from './Components/HamburgerBtn';
import RightBtns from './Components/RightBtns';
const NavBar = () => {
  return (
    <>
      <NavContainer>
        <HamburgerBtn />
        <Box display={containerResponsive}>
          <Link to="/">
            <Image src={Logo} objectFit="contain" boxSize="80px" />
          </Link>
        </Box>
        <RightBtns />
      </NavContainer>
    </>
  );
};

export default NavBar;
