import React from 'react';
import { Flex, Text, Box } from '@chakra-ui/layout';
import { IoIosArrowForward } from 'react-icons/io';
const BreadCrumbItem = ({ item, lastItem }) => {
  return (
    <Flex alignItems="center" ml={lastItem !== item && '10px'}>
      <Text ml="2px" color="nucba.grisUno" fontWeight="400">
        {item}
      </Text>
      {lastItem !== item && (
        <Box color="nucba.grisUno">
          <IoIosArrowForward fontSize="15px" />
        </Box>
      )}
    </Flex>
  );
};

export default BreadCrumbItem;
