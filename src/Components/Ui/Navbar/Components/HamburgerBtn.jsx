import React from 'react';
import { Button, useDisclosure } from '@chakra-ui/react';
import { GiHamburgerMenu } from 'react-icons/gi';
import Sidebar from '../../Sidebar/Sidebar';
const HanburgerBtn = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <Button
      display={{ sm: 'flex', md: 'none', lg: 'none', xl: 'none' }}
      onClick={onOpen}
      background="none"
    >
      <GiHamburgerMenu style={{ fontSize: 30 }} color="#ffff" />

      <Sidebar isOpen={isOpen} onClose={onClose} />
    </Button>
  );
};

export default HanburgerBtn;
