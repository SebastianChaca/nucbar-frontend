import { Button } from '@chakra-ui/button';
import React from 'react';
import { IoIosArrowForward, IoIosArrowBack } from 'react-icons/io';
import { containerResponsive } from '../../../Utils/responsives.js';
export const ArrowBtn = ({
  left,
  rigth,
  handleRigthArrow,
  handleLeftArrow,
}) => {
  return (
    <Button
      bg="nucba.form"
      borderRadius="100%"
      opacity="0.3"
      h="60px"
      w="60px"
      color="nucba.primary"
      boxShadow="lg"
      _hover={{
        boxShadow: '10px 4px 25px 1px rgba(0,0,0,0.20)',
        opacity: '0.5',
      }}
      margin="5px"
      display={containerResponsive}
      position="absolute"
      bottom="40%"
      left={left ? '1%' : '94%'}
      onClick={() => {
        if (rigth) {
          handleRigthArrow();
        } else {
          handleLeftArrow();
        }
      }}
      _focus={{ outline: 'none' }}
    >
      {left ? (
        <IoIosArrowBack fontSize="25px" />
      ) : (
        <IoIosArrowForward fontSize="25px" />
      )}
    </Button>
  );
};
