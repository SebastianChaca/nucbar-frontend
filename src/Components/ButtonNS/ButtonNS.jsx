import React from 'react';
import { Button } from '@chakra-ui/react';
const ButtonNS = ({ children, ...other }) => {
  return (
    <Button
      bg="none"
      border="none"
      m="0px"
      p="0px"
      _hover={{ bg: 'none' }}
      _focus={{ outline: 'none' }}
      {...other}
    >
      {children}
    </Button>
  );
};

export default ButtonNS;
