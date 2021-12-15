import { Button } from '@chakra-ui/button';
import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { containerResponsive } from '../../Utils/responsives';
export const Btn = ({ index, lastElement }) => {
  return (
    <Button
      bg="nucba.form"
      borderRadius="100%"
      h="60px"
      w="60px"
      color="nucba.primary"
      boxShadow="lg"
      _hover={{ boxShadow: '10px 4px 25px 1px rgba(0,0,0,0.20)' }}
      position="absolute"
      top={'130px'}
      left={lastElement === index ? '77%' : '-12%'}
      margin="5px"
      display={containerResponsive}
    >
      {index === 0 ? (
        <IoIosArrowBack fontSize="25px" />
      ) : (
        <IoIosArrowForward fontSize="25px" />
      )}
    </Button>
  );
};
