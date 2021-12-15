import { Image, Flex } from '@chakra-ui/react';
import React from 'react';
import notFound from '../../Assets/notFound.png';
const NotFound = () => {
  return (
    <Flex justifyContent="center">
      <Image src={notFound} boxSize="460px" />
    </Flex>
  );
};

export default NotFound;
