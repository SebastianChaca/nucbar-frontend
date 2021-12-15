import React from 'react';
import { Flex, Text } from '@chakra-ui/react';
const BrandStats = ({ name, quantity }) => {
  return (
    <Flex mt="8px">
      <Text fontSize="13px" fontWeight="400" color="nucba.grisUno" mr="4px">
        {name}
      </Text>
      <Text fontSize="13px" color="nucba.grisDos">
        ({quantity})
      </Text>
    </Flex>
  );
};

export default BrandStats;
