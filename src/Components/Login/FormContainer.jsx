import React from 'react';
import { Flex } from '@chakra-ui/react';
const ContainerForms = ({ children }) => {
  return (
    <Flex
      w={{ base: '300px', sm: '300px', md: '400px' }}
      margin="auto"
      border="1px"
      borderColor="gray.300"
      p="30px"
      borderRadius="10px"
      mt="65px"
      mb="30px"
      bg="nucba.form"
      flexDir="column"
    >
      {children}
    </Flex>
  );
};

export default ContainerForms;
